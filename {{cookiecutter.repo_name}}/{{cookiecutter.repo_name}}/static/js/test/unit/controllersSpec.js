'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  var scope;

  beforeEach(module('{{cookiecutter.project_name}}.controllers'));


  it('should ....', inject(function($controller, $rootScope) {
    //spec body
    scope = $rootScope.$new();
    var indexCtrl = $controller('IndexController', {$scope: scope});
    expect(indexCtrl).toBeDefined();
  }));
});