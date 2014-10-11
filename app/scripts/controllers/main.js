'use strict';

/**
 * @ngdoc function
 * @name modernhnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modernhnApp
 */
angular.module('modernhnApp')
  .controller('MainCtrl', function ($scope, $firebase, $http) {
    var ref = new Firebase('https://hacker-news.firebaseio.com/v0/topstories');
    
    var limit = $firebase(ref.limit(10));

    var topStoryRefs = limit.$asArray();

    $scope.topStories = [];

    topStoryRefs.$loaded().then(function (){
      angular.forEach(topStoryRefs, function(value) {
        $http.get('https://hacker-news.firebaseio.com/v0/item/'+value.$value+'.json').success(function (story){
          if (story.type === 'story' && story.url !== undefined && story.url){
            $scope.topStories.push(story);
          }
        });
      });
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
