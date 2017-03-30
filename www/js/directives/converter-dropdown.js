app.directive('converter', function() { 
  return { 
    restrict: 'EA', 
    scope: {}, 
    templateUrl: 'views/converter-dropdown.html',
    link: function(scope, element, attributes){
      $('document').ready(function(){
        for(var i=0; i<Object.keys(fx.rates).length; i++){
          var symbol = Object.keys(fx.rates)[i];
          console.log(symbol);
          $("#currency-drop-down").append('<li class='+i+'>' + symbol + '</li>');          
          $("."+i).on('click', function(symbol){
            console.log(symbol);
          });
      }
      });
    }
  }; 
});
