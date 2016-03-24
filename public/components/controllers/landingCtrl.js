angular.module('personalTrainer').controller('landingCtrl', function($scope, mainSvc, $state) {

//toggle the login and signup forms
$scope.loginForm = false;
$scope.toggleLogin = function(loginForm) {
  $scope.loginForm = !loginForm;
  $scope.signUp = false;
}

$scope.signUp = false;
$scope.showSignup = function(signUp) {
  $scope.signUp = !signUp;
  $scope.loginForm = false;
}

$scope.showLoginAgain = function(loginForm) {
  $scope.loginForm = !loginForm;
  $scope.signUp = false;
}

$scope.fbLogin = function() {
  mainSvc.fbLogin().then(function() {
    // $state.go('daily');
  })
}


})
