var instaApp = angular.module('instaApp',['ngFileUpload','ui.bootstrap','ng-token-auth','ui.router'])

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/templates/home.html',
    controller: 'AuthController as ctrl'
  })
  .state('instas-index', {
    url: '/instas/index',
    templateUrl: 'js/templates/instas/index.html',
    controller: 'InstaController as ctrl'
  })
  .state('users-new', {
      url: '/users/new',
      templateUrl: 'js/templates/users/new.html',
    controller: 'AuthController as ctrl'
  })
  .state('users-log_in', {
      url: '/users/log_in',
      templateUrl: 'js/templates/users/login.html',
    controller: 'AuthController as ctrl'
  });

  $urlRouterProvider.otherwise('/');

});
