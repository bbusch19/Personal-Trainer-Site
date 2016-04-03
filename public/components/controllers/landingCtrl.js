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
$scope.hideAllForms = function(loginForm, signUp, curtain) {
    $scope.loginForm = false;
    $scope.signUp = false;
    $scope.curtain = false;
}

//make a new user
$scope.createUser = function(newUser) {
    mainSvc.newUser(newUser);
}

$scope.userLogin = function(user) {
  mainSvc.userLogin(user);
}


//////////////////////
//jQuery Animations//
////////////////////

$(document).ready(function (){
    $("#about-button").click(function (){
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 2000);
    });

    $("#social-button").click(function (){
        $('html, body').animate({
            scrollTop: $("#social-section").offset().top
        }, 2000);
    });

});





})
