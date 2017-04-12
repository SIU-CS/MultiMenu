app.factory('exchangerates', ['$http', function($http) {
  var getData = function(){
    return $http({method:"GET", url:"https://openexchangerates.org/api/latest.json?app_id=6625bde1b559456a8f2a57573195105a"}).then(function(result){
      return result.data;  
    })
  }

  return { getData: getData };
  
}]);
