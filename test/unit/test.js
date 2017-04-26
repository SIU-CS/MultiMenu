describe('Filters', function(){
    beforeEach(module('multiMenuApp'));
    
    describe('length filter', function() {

    var $filter;

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    it('returns 0 when given null', function() {
        var length = $filter('length');
        expect(length(null)).toEqual(0);
    });

    it('returns the correct value when given a string of chars', function() {
        var length = $filter('length');
        expect(length('abc')).toEqual(3);
    });
    });

    describe('isoCurrency', function(){

        var symbol;
        beforeEach(inject(function($filter){
            symbol = $filter('isoCurrency',{});
            console.log(symbol);
        }));

        it('should append the britsh pound symbol', function(){
            expect(symbol('$3.56', 'GPB', '.56', ',', '.')).toBe('£3.56');
        })

    });
});