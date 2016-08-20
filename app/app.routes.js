(function(){
  'use strict';
  angular
    .module('app')
    .config( routeConfig );

  function routeConfig($stateProvider, $urlRouterProvider, $ionicConfigProvider){
    
    $urlRouterProvider.otherwise('/login');
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'app/user/login.html',
      controller: 'LoginCtrl'
    });
    

  }
})();