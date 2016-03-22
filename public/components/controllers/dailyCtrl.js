angular.module('personalTrainer').controller('dailyCtrl', function($scope, mainSvc) {

mainSvc.getDailys().then(function(response) {
  $scope.dailys = response.data;
})

})
