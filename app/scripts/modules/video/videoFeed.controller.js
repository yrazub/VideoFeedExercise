'use strict';

angular.module('video')
  .controller('VideoFeedCtrl', ['$scope', 'VideoFeed', '$timeout', function ($scope, VideoFeed, $timeout) {
      $scope.items = [];
      $scope.loading = true;

      function load(){
          let p = VideoFeed.get(function(response){
            $scope.items = response.items;
          }).$promise;

          p.finally(function(){
            $timeout(function(){
              $scope.loading = false;
            }, 1000);
          });
      }

      load();
  }]);
