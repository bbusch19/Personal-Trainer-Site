angular.module('personalTrainer').controller('profileCtrl', function($scope, mainSvc) {

  mainSvc.getProfile().then(function(response) {
      $scope.profile = response.data;
  })

  //toggle editing pane
  $scope.curtain = false;
  $scope.editPane = false;
  $scope.showEditPane = function(curtain, editPane) {
      $scope.curtain = !curtain;
      $scope.editPane = !editPane;
  }

  $scope.hideAll = function() {
      $scope.curtain = false;
      $scope.editPane = false;
  }

  $scope.updateProfile = function(profile) {
      mainSvc.updateProfile(profile);
  }

})
