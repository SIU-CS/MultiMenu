app.factory('exchangerates', ['$http', function($http) {
  return 0;/*$http.get('https://openexchangerates.org/api/latest.json?app_id=6625bde1b559456a8f2a57573195105a') 
    .success(function(data) { 
      console.log("Got exchange rates.");
      if ( typeof fx !== "undefined" && fx.rates ) {
        fx.rates = data.rates;
        fx.base = data.base;
      } else {
      // If not, apply to fxSetup global:
        var fxSetup = {
          rates : data.rates,
          base : data.base
        }
      };
      return data; 
    })
    .error(function(err) {
      console.log("Could not get exchange rates.")
      return err;
    });*/
}]);
