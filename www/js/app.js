var app = angular.module('multiMenuApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/MenuInterface.html',
    })
    .when('/menu', {
      controller: 'MenuController',
      templateUrl: 'views/menu.html',
    })
    .when('/info', {
      controller: 'InfoController',
      templateUrl: 'views/info.html',
    })
     })
    .when('/Recommendition', {
      templateUrl: 'views/Recommendation.html',
    })
    .otherwise({
      redirectTo: '/'
  });
});
