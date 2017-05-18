'use strict';

describe('Directive: vfeYoutubeVideo', function () {

    beforeEach(module('videoFeedExerciseApp'));

    var compile, scope, directiveElem, videoConfig;

    beforeEach(function(){
        module('test.templates');
        
        inject(function($compile, $rootScope, config){
            compile = $compile;
            scope = $rootScope.$new();
            videoConfig = config;
        });

        window.YT = {
            Player: jasmine.createSpy()
        };

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var element = angular.element('<div vfe-youtube-video video-id="\'video_id\'"></div>');
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    it('should create container element with proper id', function () {
        var container = directiveElem.find('.youtube-container');
        expect(container[0]).toBeDefined();
        expect(container[0].id).toMatch(/youtube\d+/);
    });

    it('should create a player', function () {
        expect(YT.Player).toHaveBeenCalledWith(jasmine.any(String), {
            height: videoConfig.videoHeight,
            width: videoConfig.videoWidth,
            videoId: 'video_id',
            events: jasmine.any(Object)
        });
    });

    it('should display an error', function () {
        var onError = YT.Player.calls.mostRecent().args[1].events.onError;
        onError();
        expect(scope.$$childTail.videoError).toEqual('Youtube video is missing');
    });
});