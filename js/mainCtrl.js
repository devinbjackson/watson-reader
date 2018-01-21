angular.module('app').controller('mainCtrl', function($scope, mainSrvc) {
    $scope.username = 'World';
    $scope.quote = {};
    mainSrvc.getQuotes().then(
        response => (
          ($scope.quote = response.data.data), console.log(response.data.data)
        )
    )
  });