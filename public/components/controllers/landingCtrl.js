angular.module('personalTrainer').controller('landingCtrl', function($scope, mainSvc, $state) {



////////////////////////
//TOGGLE LOGIN/SIGNUP//
//////////////////////
$scope.loginForm = false;
$scope.toggleLogin = function(loginForm, curtain) {
  $scope.loginForm = !loginForm;
  $scope.signUp = false;
  $scope.curtain = !curtain;
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

//make a new user
$scope.createUser = function(newUser) {
  console.log(user);
}

$scope.userLogin = function(user) {
  mainSvc.userLogin(user);
}




})
