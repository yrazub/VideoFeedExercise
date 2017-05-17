'use strict';

angular.module('video')
    .directive('vfeYoutubeVideo', ['config', function(config) {
        return {
            restrict: 'A',
            scope: {
                videoId: '='
            },
            templateUrl: '/scripts/modules/video/youtube/youtubeItem.html',
            controller: function($scope, $sce, $element) {
                $scope.loading = true;
                $scope.playerId = 'youtube' + ~~(Math.random()*1000000);
                $element.find('.youtube-container').attr('id', $scope.playerId);
                $scope.player = createPlayer($scope.videoId, $scope.playerId);

                function createPlayer (videoId, playerId) {
                    var player = new YT.Player(playerId, {
                        height: config.videoHeight,
                        width: config.videoWidth,
                        videoId: videoId,
                        events: {
                            onReady: onReady,
                            onError: onPlayerError
                        }
                    });

                    player.id = playerId;
                    return player;
                }

                function onReady(){
                    $scope.loading = false;
                    $scope.$digest();
                }

                function onPlayerError(){
                    $scope.videoError = 'Youtube video is missing';
                    $scope.$digest();
                }
            }
        }

    }]);