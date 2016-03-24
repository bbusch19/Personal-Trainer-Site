angular.module('personalTrainer').service('mainSvc', function($http) {

  //API calls to users
  // this.getUser = function() {
  //   return $http({
  //     method: 'GET',
  //     url:
  //   })
  // }

  //API calls to the dailys collection
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

  //api calls to the status' collection
  this.getStatus = function() {
    return $http({
      method: 'GET',
      url: "http://localhost:3000/api/feed"
    })
  }

  this.fbLogin = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/auth/facebook'
    })
  }

})
