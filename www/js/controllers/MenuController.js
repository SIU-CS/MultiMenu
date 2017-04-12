app.controller('MenuController', ['$scope', 'menudatabase', 'restaurantnamedatabase', 'exchangerates', function ($scope, menudatabase, restaurantnamedatabase, exchangerates) {


  menudatabase.success(function (data) {
    $scope.menu = data
  });


  restaurantnamedatabase.success(function (data) {
    $scope.restaurant_name = data;
  });

  var myDataPromise = exchangerates.getData();
  myDataPromise.then(function(data) {
    if (typeof fx !== "undefined" && fx.rates) {
      fx.rates = data.rates;
      fx.base = data.base;
      console.log("Success");
    } else {
      // If not, apply to fxSetup global:
      var fxSetup = {
        rates: data.rates,
        base: data.base
      }
    };
  })

}]);