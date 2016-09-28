angular.module('jackApp')

.controller('CodewarsApiController', ['$scope', 'CodewarsApiService', function($scope, CodewarsApiService) {

  CodewarsApiService.getInfo()
		.then(function(response) {
			$scope.data = response;
	  });

}])
