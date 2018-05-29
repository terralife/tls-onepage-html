module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true,
        style: 'compressed'
      },
      dist: {
        files: {
          'styles/css/main.css': 'styles/scss/main.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true,
        use: [require('postcss-normalize')({})],
        use: [require('postcss-flexbugs-fixes')({})],
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions', 'ie 9']
          }),
          require('cssnano')(),
        ]
      },
      dist: {
        src: 'styles/css/*.css'
      }
    },


    watch: {
      css: {
        files: ['styles/scss/**/*.{scss,sass}'],
        tasks: [
           'sass', 'postcss'
        ],
        options: {
          spawn: false,
          livereload: false
        },
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);

};
