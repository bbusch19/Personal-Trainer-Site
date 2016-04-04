angular.module('personalTrainer').controller('profileCtrl', function($scope, mainSvc, $state) {

  mainSvc.getProfile().then(function(response) {
      if (response.data.redirect === '/landing') {
          $state.go('landing');
      }

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

  $scope.logout = function() {
      mainSvc.logout().then(function(response) {
          if (response.data.redirect === '/landing') {
              $state.go('landing');
          } 
      })
  }

})
