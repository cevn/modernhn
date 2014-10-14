'use strict';

/**
 * @ngdoc function
 * @name modernhnApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the modernhnApp
 */
angular.module('modernhnApp')
  .controller('CommentsCtrl', function ($scope, $routeParams, $firebase, $http, $sce) {
    $scope.comments = [];

    $http.get('https://hacker-news.firebaseio.com/v0/item/'+$routeParams.id+'.json').success(function (story){
      if (story.type === 'story' && story.url !== undefined && story.url){
        $scope.story = story;
        angular.forEach(story.kids, function(id) {
          $http.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json').success(function (comment){
            if (comment.type === 'comment') {
              $scope.comments.push(comment);
            }
          });
        });
      }
    });
    
    $scope.toTrusted = function(html) {
      return $sce.trustAsHtml(html);
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
