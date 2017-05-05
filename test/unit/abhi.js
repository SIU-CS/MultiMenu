describe('Abhis tests', function() {
  var $compile,
      $rootScope,
      element;

  // Load the myApp module, which contains the directive
  beforeEach(module('multiMenuApp'));
  beforeEach(module('foo'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    var hotdog ={"available":"yes","calories":2500,"currency":"USD","description":"Four succulent pig sticks served on ciabatta buns. One is BBQ themed, another has chips and green onions. The third is avocado and mustard. The last one has jalapenos and cheese. Good luck.","dish":"Hotdog","fat":"10g","id":"hotdog","price":22.99,"protein":"31g","sodium":"42g","stars":"★★★★★","sugar":"28g"};
    // Compile a piece of HTML containing the directive
    var string = angular.element("<menuitem item='"+JSON.stringify(hotdog)+"'></menuitem>");
    element = $compile(string)($rootScope);
    $rootScope.$digest();
  }));

  it('should display the item name', function() {
    expect(element.html()).toContain('<h3 class="menuItemTitle ng-binding">Hotdog</h3>');
  });

  it('should display the item calorie content', function() {
    expect(element.html()).toContain('Calories: 2500');
  });

  it('should display the item fat content', function() {
    expect(element.html()).toContain('Fat: 10g');
  });
});