angular.module('video')
    .directive('vfeVideoItem', function() {
        return {
            restrict: 'A',
            require: '^model',
            scope: {
                model: '='
            },
            templateUrl: '/scripts/modules/video/videoItem.html',
            controller: function($scope, $sce) {
                let url;
                if ($scope.model.source === 'youtube') {
                    url = 'https://www.youtube.com/embed/' + $scope.model.videoId;
                } else if ($scope.model.source === 'facebook'){
                    url = 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F'
                        + $scope.model.videoId + '%2F&width=415&height=276';
                } else {
                    url = $scope.model.url;
                }
                
                $scope.url = $sce.trustAsResourceUrl(url);
            }
        }
    });