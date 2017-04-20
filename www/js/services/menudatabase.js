app.factory('menudatabase', ['$http', function($http) {
  return $http.get('https://multimenudatabase.firebaseio.com/-Ke2S5FylPegB1tR0lgd/menu/.json') 
            .success(function(data) {
              return data; 
            })
            .error(function(err) {
              return err; 
            });
}]);
