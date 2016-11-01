describe('Postcodes', function(){

	var $httpBackend, Postcodes;

	beforeEach(module('app'));

    beforeEach(inject(function(_$httpBackend_, _Postcodes_) {
        $httpBackend = _$httpBackend_;
        Postcodes = _Postcodes_;
    }));

	afterEach(function() {
	    $httpBackend.verifyNoOutstandingExpectation();
	    $httpBackend.verifyNoOutstandingRequest();
	});


    describe('when I call Postcodes.get', function(){
        it('returns an array with 4 elements', inject(function($httpBackend, Postcodes) {
            expect(Postcodes.get().length).toBe(4);
        }));
    });


    describe('when I call Postcodes.autocomplete', function(){
        it('returns something', inject(function($httpBackend, Postcodes) {

        	var postcode = 'TW8 8';

        	$httpBackend
        		.when('GET', '/api/autocomplete')
        		.respond(200, [
        			"TW8 8FA", "TW8 8B", "TW8 8B"
        		]);

            Postcodes.autocomplete().then(function(response) {
            	console.log(response);
                expect(response.status).toEqual(200);
                expect(response.data.length).toEqual(3);
            });

            $httpBackend.flush();

        }));

    });

});
