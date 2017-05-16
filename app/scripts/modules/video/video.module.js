'use strict';

angular.module('video', [])
    .factory('config', function(){
        return {
            videoFeedUrl: 'https://cdn.playbuzz.com/content/feed/items',
            videoWidth: 415,
            videoHeight: 276
        };    
    })
    
    .factory('VideoFeed', ['$resource', 'config', function($resource, config){
        return $resource(config.videoFeedUrl);
    }]);

