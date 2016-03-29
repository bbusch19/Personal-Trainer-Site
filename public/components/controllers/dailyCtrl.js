angular.module('personalTrainer').controller('dailyCtrl', function($scope, mainSvc) {

mainSvc.getProfile().then(function(response) {
    $scope.currentUser = response.data;
})

mainSvc.getDailys().then(function(response) {
  $scope.dailys = response.data;
})

$scope.postDaily = function(postBody) {
  mainSvc.postDaily(postBody);
  $('textarea').val('');
}

})
