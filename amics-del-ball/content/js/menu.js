// Inspired by http://www.devirtuoso.com/2012/01/triggering-navigation-with-scrolling-in-jquery/

// Get Sections top position
function getTargetTop(elem){
   
  // Gets the id of the section header from the navigation's href e.g. ("#html")
  var id = elem.attr("href");
  id = id.substring(1);

  // Gets the distance from the top and subtracts the height of the nav.
  if($(id).length > 0) {
    return $(id).offset().top;
  } else {
    return undefined;
  }
}

// Go through each section to see if it's at the top if it is add an active class
function checkSectionSelected(scrolledTo){
   
  // How close the top has to be to the section.
  var threshold = 200;
  var links = $('#sidebar a[href^="/#"]');

  for (i = 0; i < links.length; i++) {
     
      // Get next nav item and the distance from top
      var link = $(links[i]);
      var target = getTargetTop(link);
     
      // Check if section is at the top of the page.
      if (target !== undefined && scrolledTo > target - threshold && scrolledTo < target + threshold) {
          // Remove all selected elements and add current selected element.
          links.removeClass("active");
          link.addClass("active");
      }
  };
}

$(document).ready(function() {

  // Smooth scroll when user click link that starts with #
  $('#sidebar a[href^="/#"]').click(function(event) {
     
      // Gets the distance from the top of the section refenced in the href.
      var target = getTargetTop($(this));

      if (target !== undefined) {
        // smoothly animate to the element
        $('html, body').animate({scrollTop: target}, 500);
        event.preventDefault();
      }
  });

  // Check if page is already scrolled to a section.
  checkSectionSelected($(window).scrollTop());
  $(window).scroll(function(e){
      checkSectionSelected($(window).scrollTop())
  });

  // Last section min-height
  $("#contacte").height($(window).innerHeight() - 100);
});