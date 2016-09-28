describe('GithubApiController', function() {
  beforeEach(module('jackApp'));

  var GithubApiService, ctrl, httpBackend, state;

  beforeEach(inject(function($rootScope, _GithubApiService_, $controller, $httpBackend, $stateParams) {
    mockRoutes($httpBackend);
    scope = $rootScope.$new();
    ctrl = $controller('GithubApiController');
    GithubApiService = _GithubApiService_;
    httpBackend = $httpBackend;
  }));

  it('fetches github user info from the api', function() {
    httpBackend.expectGET("https://api.github.com/users/jackhardy1").respond(itemData);
    ctrl.getItems();
    httpBackend.flush();
    expect(ctrl.items).toEqual(itemData);
  });

});
