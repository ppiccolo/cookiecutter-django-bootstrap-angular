'use strict';

angular.module('{{cookiecutter.project_name}}.controllers', [])
  .controller('IndexController', ['$scope', function ($scope) {
    $scope.claim = 'Hello World !';
  }]);