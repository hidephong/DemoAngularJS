/**
 * Created by tuannguyen on 1/2/15.
 */
describe('infoController', function(){
    beforeEach(module('infoController'));
    it('should create "phones" model with 3 phones', inject(function($controller) {
        var scope = {},
            ctrl = $controller('PhoneListCtrl', {$scope:scope});
            expect(scope.phones.length).toBe(3);
    }));
});