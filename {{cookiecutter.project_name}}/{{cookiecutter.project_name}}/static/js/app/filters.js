'use strict';

/* Filters */

angular.module('{{cookiecutter.project_name}}.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
