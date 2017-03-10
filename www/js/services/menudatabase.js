console.log("Running menudatabase.js")
app.factory('menudatabase', ['$http', function($http) {
  return $http.get('https://multimenudatabase.firebaseio.com/-Ke2S5FylPegB1tR0lgd/menu/.json') 
            .success(function(data) { 
              console.log("Got menu from Firebase.")
              return data; 
            })
            .error(function(err) {
              console.log("Could not get menu from Firebase.")
              return err; 
            });
}]);
