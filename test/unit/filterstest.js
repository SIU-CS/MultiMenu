describe('Filters', function(){
    beforeEach(module('multiMenuApp'));

    describe('isoCurrency', function(){

        var symbol;
        beforeEach(inject(function($filter){
            symbol = $filter('isoCurrency',{});
        }));

        it('should append the britsh pound symbol', function(){
            expect(symbol(3.56, "GBP")).toBe('£3.56');
        })

    });
});