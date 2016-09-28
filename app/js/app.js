angular.module('jackApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/js/templates/home.html'
    })
    .state('github', {
      url: '/github',
      templateUrl: '/app/js/templates/github.html',
      controller: 'GithubApiController'
    })
    .state('tech_news', {
      url: '/tech_news',
      templateUrl: '/app/js/templates/guardian.html',
      controller: 'GuardianApiController'
    })
    .state('CodeWars', {
      url: '/codewars',
      templateUrl: '/app/js/templates/codewars.html',
      controller: 'CodewarsApiController'
    });
  }]);
