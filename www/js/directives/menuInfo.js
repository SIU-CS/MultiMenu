app.directive('info', function() { 
  return { 
    restrict: 'EA', 
    scope: { 
      item: '=' 
    }, 
    templateUrl: 'js/views/menuItemInfo.html' 
  }; 
});
