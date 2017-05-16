'use strict';
//TODO: Implement error handling for Facebook

angular.module('video')
    .directive('vfeFacebookVideo', ['config', function(config) {
        return {
            restrict: 'A',
            scope: {
                videoId: '='
            },
            templateUrl: '/scripts/modules/video/facebook/facebookItem.html',
            controller: function($scope, $sce) {
                let url = 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F'
                        + $scope.videoId + '%2F&width=' + (config.videoWidth) + '&height=' + (config.videoHeight);

                $scope.url = $sce.trustAsResourceUrl(url);
            }
        }
    }]);