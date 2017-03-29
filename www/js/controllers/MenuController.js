app.controller('MenuController', ['$scope', 'menudatabase', 'restaurantnamedatabase', 'exchangerates', function($scope, menudatabase, restaurantnamedatabase, exchangerates) {
  
  
  menudatabase.success(function(data) {
    $scope.menu = data
  });
  
  
  restaurantnamedatabase.success(function(data) {
    $scope.restaurant_name = data;
    console.log("Debug: MenuController.js set $scope.restaurant_name = " + $scope.restaurant_name);
  });
  
  $('#button').click(function(){
    exchangerates.success(function(data)  {
      for(var i=0; i<$scope.menu.length; i++){
        $scope.menu[i].price = fx.convert($scope.menu[i].price, {from: "USD", to: "RUB"});
      }
    });
  })
  
}]);

console.log("Menucontroller loaded");
