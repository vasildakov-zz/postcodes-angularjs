'use strict';

/**
 * @ngdoc function
 * @name app.factory:Postcodes
 * @description
 * # Postcodes
 * Postcodes
 */
app.factory('Postcodes',  ['$http', function($http) {

	var Postcodes = {};

    Postcodes.get = function (postcode) {
        return [2, 4, 6, 8];
    }

    Postcodes.autocomplete = function (postcode) {
        return $http.get('/api/autocomplete', {
        	params: { postcode: postcode }
    	});
        
        /*
        return $http({
		    url: '/api/autocomplete', 
		    method: "GET",
		    params: {postcode: postcode}
		});
		*/
    }

    Postcodes.validate = function(postcode) {
        //

    }

    return Postcodes;

}]);
