module.exports = {
  options: {livereload: true},
  js: {
    files: ['src/javascript/*.js'],
    tasks: ['copy:js'],
  },
  img_misc: {
    files: ['src/images/misc/*.*'],
    tasks: ['copy:img_misc'],
  },
  sass: {
    files: ['src/stylesheets/*.scss'],
    tasks: ['sass', 'autoprefixer:application'],
  },
  jade: {
    files: ['src/templates/**/*.jade'],
    tasks: ['jade'],
  },
};
