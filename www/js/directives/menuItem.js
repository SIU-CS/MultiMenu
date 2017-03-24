app.directive('menuitem', function(){
  return{
    restrict: 'E',
    scope:{
      item: '='
    },
    templateUrl: "views/menuItem.html",
    link: function(scope, element, attrs){
      if(scope.item.available === "yes") {
        element.before('<img src="img/checkmark.svg">'); 
      } else {
        element.before('<img src="img/blackx.png">'); 
      }
    },
  };
});
