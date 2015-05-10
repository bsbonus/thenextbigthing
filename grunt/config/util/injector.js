// Configuration for Injector task(s)
// Injects Link/Import statements in to specified files
'use strict';

var _str = require('underscore.string');

var taskConfig = function(grunt) {

  grunt.config.set('injector', {
    options: {

    },
    // Inject application script files into index.html (doesn't include bower)
    jade: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/templates/', '../');
          return 'include ' + filePath;
        },
        starttag: '//- [injector:jade]',
        endtag: '//- [endinjector]'
      },
      files: {
        '<%= yeogurt.client %>/templates/layouts/base.jade': [
          '<%= yeogurt.client %>/templates/modules/*.jade',
        ]
      }
    },
    // Inject component scss into main.scss
    stylus: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/styles/', '');
          return '@import \'' + filePath.slice(0, -5) + '\';';
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {
        '<%= yeogurt.client %>/styles/main.styl': [
          '<%= yeogurt.client %>/styles/**/*.styl',
          '!<%= yeogurt.client %>/styles/main.styl'
        ]
      }
    },
  });

};

module.exports = taskConfig;
