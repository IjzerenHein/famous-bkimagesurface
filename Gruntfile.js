/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: ['BkImageSurface.js'],
      options: {
        config: '.eslintrc'
      }
    },
    jscs: {
        src: ['BkImageSurface.js'],
        options: {
            config: '.jscsrc'
        }
    },
    jsdoc2md: {
      separateOutputFilePerInput: {
        options: {
          index: true
        },
        files: [
            { src: 'BkImageSurface.js', dest: 'docs/BkImageSurface.md' }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  // Default task.
  grunt.registerTask('default', ['eslint', 'jscs', 'jsdoc2md']);
};
