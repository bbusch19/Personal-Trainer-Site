angular.module('personalTrainer').controller('feedCtrl', function($scope, mainSvc) {

    mainSvc.getProfile().then(function(response) {
        $scope.currentUser = response.data;
    })

mainSvc.getStatus().then(function(response) {
  $scope.statuses = response.data;
})

$scope.getStatus = function() {
    mainSvc.getStatus().then(function(response) {
      $scope.statuses = response.data;
    })
}

$scope.postStatus = function(status) {
  mainSvc.postStatus(status);
  $('textarea').val('');
}

$scope.deleteStatus = function(id) {
    mainSvc.deleteStatus(id);
}

$scope.postStatusComment = function(comment, id) {
    mainSvc.postStatusComment(comment, id);
    $('textarea').val('');
  }

  $scope.deleteStatusComment = function(id, statusId) {
      mainSvc.deleteStatusComment(id, statusId);
  }


})
