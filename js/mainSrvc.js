angular.module('app').service('mainSrvc', function($http) {
    this.getQuotes = function(){
         return $http.get("http://localhost:3003/api/quotes")
        .then(response => response)
      };
    this.getVoice = function(text, voice){
        return $http.get(`http://localhost:3003/api/voice/${text}/${voice}`)
       .then(response => response)
     };  
  });