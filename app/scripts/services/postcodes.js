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

   /**
    * @ngdoc function
    * @name query
    * @description Does the thing
    * @param {String} postcode
    * @returns Returns something
    */
    Postcodes.query = function (postcode) {
        return $http.get('/api/postcodes?q=' + postcode).then(
            function success(response) {
                console.log('succeeded', response);
                return response;
            },
            function error(response) {
                console.log('failed', response);
            }
        );
    }


   /**
    * @ngdoc function
    * @name lookup
    * @param {String} postcode
    * @returns {Object}
    */
    Postcodes.lookup = function (postcode) {
        return $http({
            url: '/api/lookup',
            method: "GET",
            params: {postcode: postcode}
        });
    }


   /**
    * @ngdoc function
    * @name outward
    * @param {String} outward
    */
    Postcodes.outward = function (outward) {
        //
    }


   /**
    * @ngdoc function
    * @name inward
    * @param {String} inward
    */
    Postcodes.inward = function (inward) {
        //
    }


   /**
    * @ngdoc function
    * @name nearest
    * @param {String} latitude
    * @param {String} longitude
    * @description Returns nearest postcode
    */
    Postcodes.nearest = function (latitude, longitude) {
        return $http({
            url: '/api/nearest?latitude=' + latitude + '&longitude=' + longitude,
            method: "GET"
        });
    }


   /**
    * @ngdoc function
    * @name distance
    * @param {String} postcode
    * @param {String} postcode
    * @description Returns the distance between two postcodes
    */
    Postcodes.distance = function (from, to) {
        //
    }


   /**
    * @ngdoc function
    * @name random
    * @description Returns random postcode
    */
    Postcodes.random = function () {
        //
    }


   /**
    * @ngdoc function
    * @name autocomplete
    * @param {String} postcode
    * @description Returns an array with postcodes
    */
    Postcodes.autocomplete = function (postcode) {
        return $http.get('/api/autocomplete/' + postcode);

        /*
        return $http({
            url: '/api/autocomplete',
            method: "GET",
            params: {postcode: postcode}
        });
        */
    }


   /**
    * @ngdoc function
    * @name validate
    * @param {String} postcode
    * @description Returns true if the postcode is valid
    */
    Postcodes.validate = function(postcode) {
        //
    }

    return Postcodes;

}]);
