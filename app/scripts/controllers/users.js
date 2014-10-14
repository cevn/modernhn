'use strict';

/**
 * @ngdoc function
 * @name modernhnApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the modernhnApp
 */
angular.module('modernhnApp')
  .controller('UsersCtrl', function ($scope, $http, $routeParams) {


    $http.get('https://hacker-news.firebaseio.com/v0/user/'+$routeParams.id+'.json').success(function (user){
      if (user.id === $routeParams.id) {
        $scope.user = user;
      }
    });



    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
