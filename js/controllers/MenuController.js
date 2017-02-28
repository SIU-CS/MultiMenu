app.controller('MenuController', ['$scope', function($scope) {
  $scope.menu = [
    { 
      image: 'img/move.jpg', 
      dish: 'MOVE', 
      discription: 'MOVE, Inc.', 
      price: 0.99 
	  }, 
    { 
      image: 'img/shutterbugg.jpg', 
      dish: 'Shutterbugg', 
      discription: 'Chico Dusty', 
      price: 2.99 
    },
    {
      image: 'img/forecast.jpg',
      dish: 'HeadSpace',
      discription: 'HeadSpace LLC',
      price: 1.99
    },
    {
      image: 'img/gameboard.jpg',
      dish: 'Mint',
      discription: 'Intuit Inc',
      price: 9.99
    },
  ];
}]);

console.log("Menucontroller loaded");