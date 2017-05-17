'use strict';
//TODO: Implement error handling for Facebook

angular.module('video')
    .directive('vfeUrlVideo', ['config', function(config) {
        return {
            restrict: 'A',
            scope: {
                videoUrl: '='
            },
            templateUrl: '/scripts/modules/video/url/urlItem.html',
            controller: function($scope, $sce) {
                $scope.url = $sce.trustAsResourceUrl($scope.videoUrl);
                $scope.videoHeight = config.videoHeight;
            }
        }
    }]);