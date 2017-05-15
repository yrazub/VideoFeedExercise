'use strict';

/**
 * @ngdoc overview
 * @name videoFeedExerciseApp
 * @description
 * # videoFeedExerciseApp
 *
 * Main module of the application.
 */
angular
  .module('videoFeedExerciseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'video'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/video', {
        templateUrl: 'scripts/modules/video/videoFeed.html',
        controller: 'VideoFeedCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
