'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Postcodes
 */
app.controller('MainCtrl', function ($scope, Postcodes) {

    $scope.postcode = null;

    $scope.awesomeThings = [1, 2, 3, 'home'];

    $scope.response = {};

    $scope.lookup = function(postcode) {
        Postcodes.lookup(postcode).then(function(response){
            $scope.response = response;
        });
    };


    // $scope.postcode = JSON.stringify(response, null, 4)
    // console.log($scope.response);
});
