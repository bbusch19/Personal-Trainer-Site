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

  this.updateProfile = function(profile) {
      return $http({
          method: 'PUT',
          data: profile,
          url: '/api/users/' + profile._id
      }).success(function() {
          $state.reload('profile');
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

  this.deleteDaily = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/daily/' + id
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

  this.deleteStatus = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/feed/' + id
      })
  }


})
