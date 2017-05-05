//tests to see if some data for "hotdog" is properly displayed

describe('Bens tests', function() {
  var $compile,
      $rootScope,
      element;
  beforeEach(module('multiMenuApp'));
  beforeEach(module('foo'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;

// the actual data from firebase to test against

    var hotdog ={"available":"yes","calories":2500,"currency":"USD","description":"Four succulent pig sticks served on ciabatta buns. One is BBQ themed, another has chips and green onions. The third is avocado and mustard. The last one has jalapenos and cheese. Good luck.","dish":"Hotdog","fat":"10g","id":"hotdog","price":22.99,"protein":"31g","sodium":"42g","stars":"★★★★★","sugar":"28g"};
    var string = angular.element("<menuitem item='"+JSON.stringify(hotdog)+"'></menuitem>");
    element = $compile(string)($rootScope);
    $rootScope.$digest();
  }));

// find out if price, image and description are displayed properly

  it('should display the item price', function() {
    expect(element.html()).toContain('$22.99');
  });

  it('should inject the img path', function(){
    expect(element.html()).toContain('<img src="img/hotdog.jpg"');
  });

  it('should inject the img path', function(){
    expect(element.html()).toContain('<img src="img/hotdog.jpg"');
  });

  it('should inject the description', function(){
    expect(element.html()).toContain('Four succulent pig sticks served on ciabatta buns. One is BBQ themed, anot');
  });
});
