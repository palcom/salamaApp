'use strict';

/**
 * @ngdoc function
 * @name salamaApp.controller:LatestmoviesCtrl
 * @description
 * # LatestmoviesCtrl
 * Controller of the salamaApp
 */
angular.module('salamaApp')
  .controller('LatestmoviesCtrl', function ($scope, $http) {
    $http.get('http://127.0.0.1:8081/movies')
    .success(function(res){
    	$scope.movies = res;
    })

  });
