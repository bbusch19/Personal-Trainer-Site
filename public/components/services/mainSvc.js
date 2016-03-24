angular.module('personalTrainer').service('mainSvc', function($http) {


  ////////////////////
  //DAILY API CALLS//
  ///////////////////
  this.getDailys = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/daily'
    })
  }

  this.postDaily = function(postBody) {
    return $http({
      method: 'POST',
      data: postBody,
      url: '/api/daily'
    })
  }

  /////////////////////
  //STATUS API CALLS//
  ////////////////////
  this.getStatus = function() {
    return $http({
      method: 'GET',
      url: "http://localhost:3000/api/feed"
    })
  }

  this.postStatus = function(status) {
    return $http({
      method: 'POST',
      data: status,
      url: '/api/feed'
    })
  }


})
