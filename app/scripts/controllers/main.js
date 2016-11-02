'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Postcodes
 */
app.controller('MainCtrl', function ($scope, Postcodes) {
    $scope.awesomeThings = [1, 2, 3, 'home'];


    Postcodes.lookup('TW8 8FB').then(function(response){
        $scope.response = response;
    });


    // $scope.postcode = JSON.stringify(response, null, 4)
    // console.log($scope.response);
});
