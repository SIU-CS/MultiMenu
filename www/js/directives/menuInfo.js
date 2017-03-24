app.directive('info', function() { 
  return { 
    restrict: 'EA', 
    scope: { 
      item: '=' 
    }, 
    templateUrl: 'js/directives/menuItemInfo.html' 
  }; 
});
