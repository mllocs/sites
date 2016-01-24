module.exports = function (grunt) {
  grunt.initConfig({
    autoprefixer: require('./grunt/autoprefixer.js'),
    sass: require('./grunt/sass.js'),
    jade: require('./grunt/jade.js'),
    copy: require('./grunt/copy.js'),
    watch: require('./grunt/watch.js'),
    clean: ['./public/*'],
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('build', ['jade', 'sass', 'autoprefixer', 'copy']);
  grunt.registerTask('default', ['clean', 'build', 'watch']);
};
