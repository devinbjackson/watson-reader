angular.module('app').controller('mainCtrl', function($scope, mainSrvc) {
    $scope.username = 'World';
    $scope.quote = {};
    $scope.voice = 'en-US_LisaVoice';
    $scope.newQuote = function(){
        mainSrvc.getQuote().then(
        response => (
          ($scope.quote = response.data), console.log(response.data)
        )
    )
};
    $scope.generateAudio = mainSrvc.getVoice;
    $scope.speak = function() {
     var audio = new Audio('../audio/quote_audio.wav');
     audio.play();
};
  });