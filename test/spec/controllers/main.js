'use strict';

/*
http://www.bradoncode.com/blog/2015/07/13/unit-test-promises-angualrjs-q/
http://www.antonydenyer.co.uk/blog/2014/07/29/mocking-promise-based-services-in-angularjs/
*/

describe('MainCtrl', function () {

    var controller,
        scope,
        Postcodes,
        response,
        q;

    // load the controller's module
    beforeEach(module('app'));


    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
      scope = _$rootScope_.$new();

      q = _$q_;

      Postcodes = jasmine.createSpyObj('Postcodes', ['lookup']);

      controller = $controller;

      /* $controller = $controller('MainCtrl', {
          $scope: scope,
          Postcodes: Postcodes
      }); */

    }));

    describe('when lookup is called', function () {
        var response = {
            status: 200,
            data: {
                postcode: 'TW8 8FB',
                latitude: 51.483954952878,
                longitude: -0.31257785601887
            }
        };

        beforeEach(function () {
            Postcodes.lookup.and.returnValue(q.when(response));

            controller('MainCtrl', {
                $scope: scope,
                Postcodes: Postcodes
            });

            scope.lookup();
            scope.$apply();
        });


        it('should attach the response to the scope', function () {
            expect(scope.response).toEqual(response);
            expect(scope.response.status).toBe(200);
            expect(scope.response.data.postcode).toBe('TW8 8FB');
        });


        it('should attach a list of awesomeThings to the scope', function () {
            expect(scope.awesomeThings.length).toBe(4);
        });

    });

});
