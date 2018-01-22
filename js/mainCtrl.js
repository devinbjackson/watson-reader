angular.module('app').controller('mainCtrl', function($scope, mainSrvc) {
    $scope.username = 'World';
    $scope.quote = {};
    $scope.voice = 'en-US_AllisonVoice';
    mainSrvc.getQuotes().then(
        response => (
          ($scope.quote = response.data), console.log(response.data)
        )
    );
    $scope.speak = mainSrvc.getVoice
  });