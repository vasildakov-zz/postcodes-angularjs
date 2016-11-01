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


    describe('when I call postcodes query with valid postcode', function(){
        it('should return the postcode', function() {

            var postcode = 'TW8 8FB';

            $httpBackend
                .when('GET', '/api/postcodes?q=' + postcode)
                .respond(200, ['TW8 8FB']);

            Postcodes.query(postcode).then(function(response) {
                expect(response.status).toEqual(200);
                expect(response.data.length).toEqual(1);
                expect(response.data).toContain("TW8 8FB");
            });

            $httpBackend.flush();
        });
    });


    describe('when I call postcodes autocomplete with partial postcode', function(){
        it('should return an array with postcodes', function() {

        	var postcode = 'TW8 8';

            $httpBackend
                .when('GET', '/api/autocomplete/' + postcode)
                .respond(200, [
                    "TW8 8FA",
                    "TW8 8FB",
                    "TW8 8FC"
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
        it('should return an array with postcodes', function() {

            var latitude  = 51.483954952877600,
                longitude = -0.312577856018865;

            $httpBackend
                .when('GET', '/api/nearest?latitude=' + latitude + '&longitude=' + longitude)
                .respond(200, [
                    "TW8 1",
                    "TW8 2",
                    "TW8 3",
                    "TW8 4",
                    "TW8 5"
                ]);

            Postcodes.nearest(latitude, longitude).then(function(response) {
                expect(response.status).toEqual(200);
                expect(response.data.length).toEqual(5);
                expect(response.data).toContain("TW8 1");
            });

            $httpBackend.flush();

        });
    });

});
