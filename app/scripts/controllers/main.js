'use strict';

/**
 * @ngdoc function
 * @name videoFeedExerciseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoFeedExerciseApp
 */
angular.module('videoFeedExerciseApp')
  .controller('MainCtrl', ['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.currentItem = $location.$$path.replace('/', '');

    $rootScope.$on('$routeChangeSuccess', function(){
      $rootScope.currentItem = $location.$$path.replace('/', '');
    });

  }]);
