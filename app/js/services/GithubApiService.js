angular.module('jackApp')

.service('GithubApiService', ['$http', function($http){
  var self = this;

  var API_LINK = 'https://api.github.com/users/jackhardy1'
  var API_LINK_REPOS = API_LINK + "/repos"

  self.getUserInfo = function(){
    return $http.get(API_LINK)
    .then(_handleResponseFromApi);
  }

  self.getRepos = function(){
    return $http.get(API_LINK_REPOS)
    .then(_handleResponseFromApi);
  }

  function _handleResponseFromApi (response) {
    return response.data;
  }

}]);
