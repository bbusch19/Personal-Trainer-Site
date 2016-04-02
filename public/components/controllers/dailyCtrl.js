angular.module('personalTrainer').controller('dailyCtrl', function($scope, mainSvc, $state) {

mainSvc.getProfile().then(function(response) {
    $scope.currentUser = response.data;
    if ($scope.currentUser.admin === true){
        $scope.inputBox = true;
        $scope.delete = true;
  }
})

mainSvc.getDailys().then(function(response) {
  $scope.dailys = response.data;
})

$scope.getDailys = function() {
    mainSvc.getDailys().then(function(response) {
      $scope.dailys = response.data;
    })
}


$scope.postDaily = function(postBody) {
  mainSvc.postDaily(postBody);
  $('textarea').val('');
}

$scope.deleteDaily = function(id) {
    mainSvc.deleteDaily(id);
}

$scope.postComment = function(comment, id) {
    mainSvc.postComment(comment, id);
    $('textarea').val('');
  }

$scope.deleteComment = function(id, dailyId) {
    mainSvc.deleteComment(id, dailyId);
}

})
