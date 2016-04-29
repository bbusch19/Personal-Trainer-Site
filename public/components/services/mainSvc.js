angular.module('personalTrainer').service('mainSvc', function($http, $state) {

var baseUrl = 'https://deena-farmer.herokuapp.com';
  ///////////////////
  //USER API CALLS//
  /////////////////
  this.userLogin = function(user) {
    return $http({
      method: 'POST',
      data: user,
      url: baseUrl + '/login'
  }).success(function() {
      $state.go('daily');
    })
  }

  this.newUser = function(newUser) {
      return $http({
          method: 'POST',
          data: newUser,
          url: baseUrl + '/signup'
      }).success(function() {
          $state.go('daily');
      })
  }

  this.getProfile = function() {
     return $http ({
         method: 'GET',
         url: baseUrl + '/api/user/current'
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

  this.logout = function() {
      return $http({
          method: 'GET',
          url: baseUrl + '/logout'
      })
  }

  ////////////////////
  //DAILY API CALLS//
  ///////////////////
  this.getDailys = function() {
    return $http({
      method: 'GET',
      url: '/api/daily'
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

  this.postComment = function(comment, id) {
      return $http({
          method: 'PUT',
          data: comment,
          url: '/api/comment/' +id
      })
  }

  this.deleteComment = function(id, daily) {
      return $http({
          method: 'DELETE',
          url: 'api/comment/' + id +'/'+ daily
      })
  }

  /////////////////////
  //STATUS API CALLS//
  ////////////////////
  this.getStatus = function() {
    return $http({
      method: 'GET',
      url: "/api/feed"
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

  this.postStatusComment = function(comment, id) {
      return $http({
          method: 'PUT',
          data: comment,
          url: '/api/status/comment/' + id
      })
  }

  this.deleteStatusComment = function(id, status) {
      return $http({
          method: 'DELETE',
          url: '/api/status/comment/' + id +'/'+ status
      })
  }

  this.deleteStatus = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/feed/' + id
      })
  }

  this.getFeedActivity = function() {
      return $http({
          method: 'GET',
          url: '/api/feed/user'
      })
  }


})
