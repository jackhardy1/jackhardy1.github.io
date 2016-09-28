angular.module('jackApp')

.service('CodewarsApiService', ['$http', function($http){
  var self = this;

  var API_ACCESS_KEY = "B2yXTbUv7GQKJR_5TGsn"
  var API_LINK = "https://www.codewars.com/api/v1/users/Jack%20Hardy?access_key=" + API_ACCESS_KEY

  self.getInfo = function(){
    return $http.get(API_LINK)
    .then(_handleResponseFromApi);
  }

  function _handleResponseFromApi (response) {
    return response.data;
  }

}]);
