'use strict';

/**
 * @ngdoc function
 * @name modernhnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modernhnApp
 */
angular.module('modernhnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
