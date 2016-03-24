angular.module('personalTrainer').controller('feedCtrl', function($scope, mainSvc) {

mainSvc.getStatus().then(function(response) {
  $scope.statuses = response.data;
})

$scope.postStatus = function(status) {
  mainSvc.postStatus(status);
  $('textarea').val('');
}

})
