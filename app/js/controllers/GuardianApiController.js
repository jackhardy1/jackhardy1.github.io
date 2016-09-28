angular.module('jackApp')

.controller('GuardianApiController', ['$scope', 'GuardianApiService', function($scope, GuardianApiService) {

  $scope.news;

  GuardianApiService.getInfo()
  .then(function(response){
    $scope.news = response
  });

}]);
