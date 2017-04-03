app.directive('converter', function() { 
  return { 
    restrict: 'EA', 
    scope: {
      menu: '=',
    },
    templateUrl: 'views/converter-dropdown.html',
    link: function(scope, element, attributes){
      $('document').ready(function(){
        for(var i=0; i<Object.keys(fx.rates).length; i++){
          var symbol = Object.keys(fx.rates)[i];
          $("#currency-drop-down").append('<li class='+i+'>' + symbol + '</li>');          
          $("."+i).on('click', function(){
            scope.currency = this.innerHTML;
            for(var j=0; j<Object.keys(scope.menu).length; j++){
              scope.menu[j].price = fx.convert(scope.menu[j].price, {from: scope.menu[j].currency, to: scope.currency});
              scope.menu[j].currency = scope.currency;
              scope.$apply();
            };
          });
        }
      });
    }
  }; 
});
