module.exports = function (grunt) {
  grunt.initConfig({
    autoprefixer: {
      application: {
        src: 'public/stylesheets/application.css'
      , dest: 'public/stylesheets/application.css'
      }
    }
  , sass: {
      dist: {
        files: {
          'public/stylesheets/application.css' : 'src/sass/application.scss'
        }
      }
    }
  , jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        }
      , files: {
          'public/index.html': ['src/templates/index.jade']
        }
      }
    }
  , copy: {
      js: {
        expand: true
      , cwd: 'src/javascript/'
      , src: '**'
      , dest: 'public/javascript/'
      }
    , img_misc: {
        expand: true
      , cwd: 'src/images/misc'
      , src: '**'
      , dest: 'public/images/'
      }
    , img_icons: {
        expand: true
      , cwd: 'src/images/icons'
      , src: '*.png'
      , dest: 'public/images/icons'
      }
    }
  , watch: {
      options: {
        livereload: true
      }
    , js: {
        files: ['src/javascript/*.js']
      , tasks: ['copy:js']
      }
    , img_misc: {
        files: ['src/images/misc/*.*']
      , tasks: ['copy:img_misc']
      }
    , img_icons_social: {
        files: ['src/images/icons/social/*.png']
      , tasks: ['sprite:icons_social', 'sass', 'copy:img_icons']
      }
    , sass: {
        files: ['src/sass/*.scss']
      , tasks: ['sass', 'autoprefixer:application']
      }
    , jade: {
        files: ['src/templates/**/*.jade']
      , tasks: ['jade']
      }
    }
  , sprite: {
      icons_social: {
        src: 'src/images/icons/social/*.png'
      , destImg: 'src/images/icons/social.png'
      , destCSS: 'src/sass/icons_social.scss'
      , engine: 'gm'
      , cssFormat: 'css'
      , engineOpts: {
          imagemagick: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('default', ['watch']);
};
