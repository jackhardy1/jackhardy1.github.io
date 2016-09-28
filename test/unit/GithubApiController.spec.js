describe('GithubApiController', function() {
  beforeEach(module('jackApp'));

  var GithubApiService, ctrl, httpBackend, state;

  beforeEach(inject(function($rootScope, _GithubApiService_, $controller, $httpBackend, $stateParams) {
    mockRoutes($httpBackend);
    scope = $rootScope.$new();
    ctrl = $controller('ItemController');
    GithubApiService = _GithubApiService_;
    httpBackend = $httpBackend;
  }));

  it('fetches items from API and stores in the controller', function() {
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    ctrl.getItems(billId);
    httpBackend.flush();
    expect(ctrl.items).toEqual(itemData);
  });

});
