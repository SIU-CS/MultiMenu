app.factory('restaurantnamedatabase', ['$http', function($http) { 
  console.log("Attempting to get restaurant name from firebase.")
  return $http.get('https://multimenudatabase.firebaseio.com/-Ke2S5FylPegB1tR0lgd/restaurant/.json') 
            .success(function(data) { 
              console.log("Debug: restaurant_name_database.js retrieved: " + data);
              return data;
            })
            .error(function(err) {
              console.log("Could not get restaurant name from Firebase.")
              return err; 
            }); 
}]);
