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

    $scope.postcode = Postcodes.query('TW8 8FB');
    //console.log($scope.postcode);
});
