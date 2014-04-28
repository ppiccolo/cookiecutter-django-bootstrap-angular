'use strict';

// Declare app level module which depends on filters, and services

angular.module('{{cookiecutter.project_name}}', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',

  '{{cookiecutter.project_name}}.filters',
  '{{cookiecutter.project_name}}.services',
  '{{cookiecutter.project_name}}.directives',
  '{{cookiecutter.project_name}}.controllers'
]);