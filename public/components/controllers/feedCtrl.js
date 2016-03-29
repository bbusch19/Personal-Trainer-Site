angular.module('personalTrainer').controller('feedCtrl', function($scope, mainSvc) {

    mainSvc.getProfile().then(function(response) {
        $scope.currentUser = response.data;
    })

mainSvc.getStatus().then(function(response) {
  $scope.statuses = response.data;
})

$scope.postStatus = function(status) {
  mainSvc.postStatus(status);
  $('textarea').val('');
}

$scope.deleteStatus = function(id) {
    mainSvc.deleteStatus(id);
}


})
