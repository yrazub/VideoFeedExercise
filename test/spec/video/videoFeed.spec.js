'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('videoFeedExerciseApp'));

  var controller,
    scope,
    httpBackend,
    items = [
    {
      'title': 'Be a winner!',
      'type': 'video',
      'source': 'youtube',
      'videoId': 'I33u_EHLI3w',
      'views': 12451409
    },
    {
      'title': 'How to prepare a great beer',
      'type': 'video',
      'source': 'facebook',
      'videoId': '1052114818157758',
      'views': 4569654
    }
  ];

  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
  	httpBackend = $httpBackend;

    scope = $rootScope.$new();
    controller = $controller('VideoFeedCtrl', {
      $scope: scope
    });
  }));

  it('controller should be defined', function () {
    expect(controller).toBeDefined();
  });

  it('controller should store video items', function () {
  	httpBackend.whenGET('https://cdn.playbuzz.com/content/feed/items')
  		.respond(200, {items:items});
    httpBackend.flush();
    expect(scope.items).toEqual(items);
  });

  it('controller should set error on fail', function () {
  	httpBackend.whenGET('https://cdn.playbuzz.com/content/feed/items')
  		.respond(404, 'Not found');
    httpBackend.flush();
    expect(scope.items).toEqual([]);
    expect(scope.error).toBe('Could not load feed');
  });
});
