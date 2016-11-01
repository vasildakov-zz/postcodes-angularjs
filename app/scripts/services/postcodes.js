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


    Postcodes.query = function (postcode) {
        //
    }


    Postcodes.lookup = function (postcode) {
        return $http({
            url: '/api/lookup',
            method: "GET",
            params: {postcode: postcode}
        });
    }

    Postcodes.outward = function (outward) {
        //
    }


    Postcodes.inward = function (inward) {
        //
    }


    Postcodes.nearest = function (lat, lon) {
        return $http({
            url: '/api/nearest?latitude=' + lat + '&longitude=' + lon,
            method: "GET"
            //params: {latitude: latitude, longitude: longitude}
        });
    }


    Postcodes.distance = function (from, to) {
        //
    }


    Postcodes.random = function () {
        //
    }

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

    Postcodes.validate = function(postcode) {
        //
    }

    return Postcodes;

}]);
