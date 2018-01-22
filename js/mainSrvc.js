angular.module('app').service('mainSrvc', function($http) {
    this.getQuotes = function(){
         return $http.get("http://localhost:3003/api/quotes")
        .then(response => response)
      };
  });