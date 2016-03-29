angular.module('personalTrainer').service('mainSvc', function($http, $state) {

  ///////////////////
  //USER API CALLS//
  /////////////////
  this.userLogin = function(user) {
    return $http({
      method: 'POST',
      data: user,
      url: '/login'
    }).success(function() {
      $state.go('daily');
    })
  }

  this.newUser = function(newUser) {
      return $http({
          method: 'POST',
          data: newUser,
          url: '/signup'
      }).success(function() {
          $state.go('daily');
      })
  }

  this.getProfile = function() {
     return $http ({
         method: 'GET',
         url: '/api/user/current'
     })
  }

  ////////////////////
  //DAILY API CALLS//
  ///////////////////
  this.getDailys = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/daily'
  }).success(function(response) {
      if (typeof response.redirect == 'string') {
          $state.go('landing');
      }
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
    }).success(function(response) {
        if (typeof response.redirect == 'string') {
            $state.go('landing');
        }
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
