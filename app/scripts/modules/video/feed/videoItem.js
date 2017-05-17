angular.module('video')
    .directive('vfeVideoItem', function() {
        return {
            restrict: 'A',
            scope: {
                model: '='
            },
            templateUrl: '/scripts/modules/video/feed/video.html',
            controller: function($scope) {
                $scope.defaultTitle = 'Untitled';
                $scope.missingData = !$scope.model.source ||
                    ($scope.model.source === 'facebook' && !$scope.model.videoId) ||
                    ($scope.model.source === 'youtube' && !$scope.model.videoId) ||
                    ($scope.model.source === 'url' && !$scope.model.url);
                if ($scope.missingData) {
                    $scope.videoError = $scope.model.source + ' video is missing';
                }
            }
        }
    });