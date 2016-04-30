angular.module('app', ['ui.router'])
.config(['$stateProvider','$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.when('', '/');

  $stateProvider.state('home', {
    url:'/',
    templateUrl: '/app/home/home.html',
    controller: 'HomeCtrl'
  });
}]);
