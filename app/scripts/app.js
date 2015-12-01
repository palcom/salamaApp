'use strict';

/**
 * @ngdoc overview
 * @name salamaApp
 * @description
 * # salamaApp
 *
 * Main module of the application.
 */
angular
  .module('salamaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/latestmovies', {
        templateUrl: 'views/latestmovies.html',
        controller: 'LatestmoviesCtrl',
        controllerAs: 'latestmovies'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
