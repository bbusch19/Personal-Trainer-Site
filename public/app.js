angular.module('personalTrainer', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider
.state('landing', {
  url: '/landing',
  templateUrl: './components/views/landingTmpl.html',
  controller: 'landingCtrl'
});

$urlRouterProvider.otherwise('/landing');


});
