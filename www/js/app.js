var app = angular.module('GalleryApp', ['ngRoute']);
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
    .otherwise({
      redirectTo: '/'
  });
});
