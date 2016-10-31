'use strict';

/**
 * @ngdoc function
 * @name Postcodes.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Postcodes
 */
app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [1,2,3, 'home'];

    console.log($scope.awesomeThings);
}]);
