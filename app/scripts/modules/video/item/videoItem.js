angular.module('video')
    .directive('vfeVideoItem', function() {
        return {
            restrict: 'A',
            require: '^model',
            scope: {
                model: '='
            },
            templateUrl: '/scripts/modules/video/item/video.html',
            controller: function($scope, $sce) {
            }
        }
    });