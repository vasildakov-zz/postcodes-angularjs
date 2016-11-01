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


    describe('when I call postcodes get', function(){
        it('returns an array with 4 elements', function() {
            expect(Postcodes.get().length).toBe(4);
        });
    });


    describe('when I call postcodes autocomplete with partial postcode', function(){
        it('returns something', function() {

        	var postcode = 'TW8 8';

            $httpBackend
                .when('GET', '/api/autocomplete/' + postcode)
                .respond(200, [
                    "TW8 8FA", "TW8 8B", "TW8 8B"
                ]);

            Postcodes.autocomplete(postcode).then(function(response) {
                //console.log(response);
                expect(response.status).toEqual(200);
                expect(response.data.length).toEqual(3);
            });

            $httpBackend.flush();

        });
    });


    describe('when I call postcodes nearest with latitude and longitude', function(){
        it('returns something', function() {

            var latitude  = 51.483954952877600,
                longitude = -0.312577856018865;

            $httpBackend
                .when('GET', '/api/nearest?latitude=' + latitude + '&longitude=' + longitude)
                .respond(200, [
                    "TW8 1", "TW8 2", "TW8 3", "TW8 4", "TW8 5"
                ]);

            Postcodes.nearest(latitude, longitude).then(function(response) {
                expect(response.status).toEqual(200);
                expect(response.data.length).toEqual(5);
            });

            $httpBackend.flush();

        });
    });

});
