app.controller('MenuController', ['$scope', 'menudatabase', 'restaurantnamedatabase', function($scope, menudatabase, restaurantnamedatabase) {
  
  
  menudatabase.success(function(data) {
    $scope.menu = data
  });
  
  
  restaurantnamedatabase.success(function(data) {
    $scope.restaurant_name = data;
    console.log("Debug: MenuController.js set $scope.restaurant_name = " + $scope.restaurant_name);
  });
  
  
}]);

console.log("Menucontroller loaded");
