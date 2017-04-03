app.factory('exchangerates', ['$http', function($http) {
  return $http.get('https://openexchangerates.org/api/latest.json?app_id=6625bde1b559456a8f2a57573195105a') 
    .success(function(data) { 
      console.log("Got exchange rates.");
      return data; 
    })
    .error(function(err) {
      console.log("Could not get exchange rates.")
      return err;
    });
}]);
