angular.module('personalTrainer').controller('landingCtrl', function($scope) {

//toggle the signup form
$scope.showSignupForm = false;
$scope.toggleSignup = function(showSignupForm) {
  $scope.showSignupForm = !showSignupForm;
}


})
