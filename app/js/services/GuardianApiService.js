angular.module('jackApp')

.service('GuardianApiService', ['$http', function($http){
  var self = this;

  var API_KEY = "f605bbf6-b282-469b-a8d7-3825bb25ad89";
  var API_LINK = "http://content.guardianapis.com/search?q=tech&api-key=" + API_KEY;

  self.getInfo = function(){
    return $http.get(API_LINK)
    .then(_handleResponseFromApi);
  }

  function _handleResponseFromApi (response) {
    return response.data.response.results;
  }

}]);
