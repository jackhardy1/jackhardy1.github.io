var instaApp = angular.module('instaApp',['ngFileUpload','ui.bootstrap','ng-token-auth','ui.router'])

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/templates/home.html',
    controller: 'AuthController as ctrl'
  });

  $urlRouterProvider.otherwise('/');

});
