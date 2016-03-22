angular.module('personalTrainer').controller('landingCtrl', function($scope) {

$scope.loginForm = true;
$scope.toggleLogin = function(loginForm) {
  $scope.loginForm = !loginForm;
}

//toggle the signup form
$scope.showSignupForm = false;
$scope.toggleSignup = function(showSignupForm) {
  $scope.showSignupForm = !showSignupForm;
}


})
