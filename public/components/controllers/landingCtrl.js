angular.module('personalTrainer').controller('landingCtrl', function($scope) {

$scope.loginForm = false;
$scope.toggleLogin = function(loginForm) {
  $scope.loginForm = !loginForm;
}


})
