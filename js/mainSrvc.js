angular.module('app').service('mainSrvc', function($http) {
    this.getQuotes = function(){
        return $http.get("http://localhost:3003/quotes")
        .then(response => console.log('hi'))
      };
  });