angular.module('personalTrainer').controller('dailyCtrl', function($scope, mainSvc) {

mainSvc.getProfile().then(function(response) {
    $scope.currentUser = response.data;
    if ($scope.currentUser.admin === true) $scope.inputBox = true;
})

mainSvc.getDailys().then(function(response) {
  $scope.dailys = response.data;
  // if($scope.dailys.)
})

$scope.postDaily = function(postBody) {
  mainSvc.postDaily(postBody);
  $('textarea').val('');
}

$scope.deleteDaily = function(id) {
    mainSvc.deleteDaily(id);
}

})
