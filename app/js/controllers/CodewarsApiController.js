angular.module('jackApp')

.controller('CodewarsApiController', ['$scope', 'CodewarsApiService', function($scope, CodewarsApiService) {

  $scope.username;
  $scope.honor;
  $scope.leaderboardPosition;
  $scope.totalRank;
  $scope.totalScore;
  $scope.totalColor;

  CodewarsApiService.getInfo()
		.then(function(response) {
			$scope.username = response.username;
      $scope.honor = response.honor;
		  $scope.leaderboardPosition = response.leaderboardPosition;
		  $scope.totalRank = response.ranks.overall.name;
		  $scope.totalScore = response.ranks.overall.score;
      $scope.totalColor = response.ranks.overall.color;
	  });


}])
