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
          console.log(symbol);
          $("#currency-drop-down").append('<li class='+i+'>' + symbol + '</li>');          
          $("."+i).on('click', function(){
            for(var j=0; j<Object.keys(scope.menu).length; j++){
              //console.log(fx.convert(scope.menu[j].price, {from: "USD", to: this.innerHTML}));
              scope.menu[j].price = fx.convert(scope.menu[j].price, {from: "USD", to: this.innerHTML});
              console.log(scope.menu[j].price);
            }
          });
      }
      });
    }
  }; 
});
