module.exports = function(grunt) {
  // Do grunt-related things in here
  // Project configuration.
  grunt.initConfig({
    // 这里是pkg任务的配置信息。
    pkg: grunt.file.readJSON('package.json'),
    // 这里是uglify任务的配置信息
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      // 这里是build任务的配置信息
    build: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'build/<%= pkg.name %>.min.js'
    }
  }
  });
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
