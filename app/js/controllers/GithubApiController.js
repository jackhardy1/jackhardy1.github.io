angular.module('jackApp')

.controller('GithubApiController', ['$scope', 'GithubApiService', function($scope, GithubApiService) {

  $scope.userInfo;
  $scope.repos;
  // $scope.orderList = "language";

  GithubApiService.getUserInfo()
		.then(function(response) {
			$scope.userInfo = response;
	  });

  GithubApiService.getRepos()
    .then(function(response) {
      $scope.repos = response;
    });

}]);
