angular.module('personalTrainer', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider
.state('landing', {
  url: '/landing',
  templateUrl: './components/views/landingTmpl.html',
  controller: 'landingCtrl'
})
.state('daily', {
  url: '/daily',
  templateUrl: './components/views/dailyTmpl.html',
  controller: 'dailyCtrl',
  // resolve: {
  //     user: function(mainSvc) {
  //        return mainSvc.getProfile();
  //     }
  // }
})
.state('feed', {
  url: '/feed',
  templateUrl: './components/views/feedTmpl.html',
  controller: 'feedCtrl'
})
.state('profile',{
  url: '/profile',
  templateUrl: './components/views/profileTmpl.html',
  controller: 'profileCtrl'
});

$urlRouterProvider.otherwise('/landing');


});
