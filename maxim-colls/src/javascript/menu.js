define(['jquery'], function ($) {

  /**
   * Get Sections top position
   *
   * @return {Integer}
   */
  function getTargetTop(elem) {
    var id = elem.attr('href').substring(1);

    if ($(id).length > 0) {
      return $(id).offset().top;
    } else {
      return null;
    }
  }

  /**
   * Go through each section to see if it's at the top if it is add an active class
   *
   * @param  {Integer} scrolledTo
   */
  function checkSectionSelected(scrolledTo) {
    var threshold = 200
      , links = $('.sidebar a[href^="/#"]')
      , link
      , target
      , i;

    for (i = 0; i < links.length; i++) {
      link = $(links[i]);
      target = getTargetTop(link);

      if (target !== null &&
          scrolledTo > target - threshold &&
          scrolledTo < target + threshold) {
        links.removeClass('active');
        link.addClass('active');
      }
    }
  }

  $(document).ready(function () {
    $('.sidebar a[href^="/#"]').click(function (event) {
      var target = getTargetTop($(this));

      if (target !== undefined) {
        $('html, body').animate({scrollTop: target}, 500);
        event.preventDefault();
      }
    });

    var body = document.body
      , $logo = $('img.logo')
      , $body = $(body)
      , timer;

    // Check if page is already scrolled to a section.
    checkSectionSelected($(window).scrollTop());

    $(window).scroll(function (e) {
      clearTimeout(timer);
      if (!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover');
      }

      timer = setTimeout(function () {
        body.classList.remove('disable-hover');
      }, 300);

      $logo.css({
        'transform': 'rotate(' + ($body.scrollTop() / 1000 * 360) + 'deg)'
      });

      checkSectionSelected($(window).scrollTop());
    });

    // Last section min-height
    $('#contact').height($(window).innerHeight());

    $('.content a').prop('target', '_blank');
  });
});
