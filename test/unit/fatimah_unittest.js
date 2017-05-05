describe('Fatimahs tests', function() {
  var $compile,
      $rootScope,
      element;

  beforeEach(module('multiMenuApp'));
  beforeEach(module('foo'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    var hotdog ={"available":"yes","calories":2500,"currency":"USD","description":"Four succulent pig sticks served on ciabatta buns. One is BBQ themed, another has chips and green onions. The third is avocado and mustard. The last one has jalapenos and cheese. Good luck.","dish":"Hotdog","fat":"10g","id":"hotdog","price":22.99,"protein":"31g","sodium":"42g","stars":"★★★★★","sugar":"28g"};
    // Compile a piece of HTML containing the directive
    var string = angular.element("<menuitem item='"+JSON.stringify(hotdog)+"'></menuitem>");
    element = $compile(string)($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    //var element = $compile('<h1>hello!</h1>')($rootScope);
    $rootScope.$digest();
  }));

  it('should display the item sodium content', function() {
    // Check that the compiled element contains the templated contents
    expect(element.html()).toContain('Sodium: 42g');
  }); 
  
  it('should display the item protein content', function() {
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain('Protein: 31g');
  });

  it('should display the item rating', function() {
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain('Dish Rating: ★★★★★');
  });
});