angular.module('personalTrainer').controller('profileCtrl', function($scope, mainSvc) {

  mainSvc.getProfile().then(function(response) {
      console.log(response);
      $scope.profile = response.data;
  })

})
