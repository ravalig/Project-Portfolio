module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
    dev: {
      options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '320px',
            quality: 20
          },{
            name: 'medium',
            width: '640px',
            quality: 40
          },
          {
            name: 'large',
            width: '1024px',
            quality: 60
          }]
        },
      files: [{
        expand: true,
        src: ['**/*.{jpg,png,gif}'],
        cwd: 'img/',
        dest: 'img/'
      }]
    }
  },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default',['responsive_images']);

};
