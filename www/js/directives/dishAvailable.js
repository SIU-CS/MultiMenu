app.directive('dishavailable', function(){
  return{
    restrict: 'E',
    scope:{
      item: '='
    },
    templateUrl: "views/dishAvailable.html",
    link: function(scope, element, attrs){
      if(scope.item.available === "yes") {
        element.toggleClass("glyphicon glyphicon-ok-circle"); 
      } else {
        element.toggleClass("glyphicon glyphicon-ban-circle"); 
      }
    },
  };
});
