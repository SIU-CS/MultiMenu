var app = angular.module('GalleryApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
    })
    .when('/menu', {
      controller: 'MenuController',
      templateUrl: 'views/menu.html',
    })
    .otherwise({
      redirectTo: '/'
  });
});
