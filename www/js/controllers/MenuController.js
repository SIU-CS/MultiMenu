app.controller('MenuController', ['$scope', 'menudatabase', 'restaurantnamedatabase', 'exchangerates', function ($scope, menudatabase, restaurantnamedatabase, exchangerates) {


  menudatabase.success(function (data) {
    $scope.menu = data
  });


  restaurantnamedatabase.success(function (data) {
    $scope.restaurant_name = data;
    console.log("Debug: MenuController.js set $scope.restaurant_name = " + $scope.restaurant_name);
  });

  exchangerates.success(function (data) {
    if (typeof fx !== "undefined" && fx.rates) {
      fx.rates = data.rates;
      fx.base = data.base;
    } else {
      // If not, apply to fxSetup global:
      var fxSetup = {
        rates: data.rates,
        base: data.base
      }
    };
  });

}]);

console.log("Menucontroller loaded");
