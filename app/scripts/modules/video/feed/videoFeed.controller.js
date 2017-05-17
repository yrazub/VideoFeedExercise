'use strict';

angular.module('video')
  .controller('VideoFeedCtrl', ['$scope', 'VideoFeed', '$timeout', function ($scope, VideoFeed, $timeout) {
      $scope.items = [];

      function load(){
          VideoFeed.get(
            function(response){
              $scope.items = response.items;
            },
            function(error){
              console.error(error);
              $scope.error = 'Could not load feed';
            }
          );
      }

      load();
  }]);
