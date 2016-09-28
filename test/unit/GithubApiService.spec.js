describe('GithubApiService', function() {
  beforeEach(module('jackApp'));

  var GithubApiService, httpBackend;
  var GithubData = [{
    "login": "jackhardy1",
    "id": "16652827",
    "id": 16652827,
    "avatar_url": "https://avatars.githubusercontent.com/u/16652827?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jackhardy1",
    "html_url": "https://github.com/jackhardy1",
    "followers_url": "https://api.github.com/users/jackhardy1/followers",
    "following_url": "https://api.github.com/users/jackhardy1/following{/other_user}",
    "gists_url": "https://api.github.com/users/jackhardy1/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jackhardy1/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jackhardy1/subscriptions",
    "organizations_url": "https://api.github.com/users/jackhardy1/orgs",
    "repos_url": "https://api.github.com/users/jackhardy1/repos",
    "events_url": "https://api.github.com/users/jackhardy1/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jackhardy1/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": null,
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Enthusiastic, Personable and Curious Junior Developer",
    "public_repos": 56,
    "public_gists": 0,
    "followers": 16,
    "following": 27,
    "created_at": "2016-01-11T17:50:13Z",
    "updated_at": "2016-09-27T13:23:44Z"
  }];

  beforeEach(inject(function(_GithubApiService_, $httpBackend) {
    mockRoutes($httpBackend);
    GitubApiService = _GithubApiService_;
    httpBackend = $httpBackend;
  }));

  it('fetches info from github', function() {
    httpBackend.expectGET("https://api.github.com/users/jackhardy1").respond(GithubData);
    GithubApiService.getUserInfo().then(function(data) {
      expect(data).toEqual(GithubData);
    });
    httpBackend.flush();
  });
});
