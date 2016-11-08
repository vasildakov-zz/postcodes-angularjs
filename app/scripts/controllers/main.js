'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Postcodes
 */
app.controller('MainCtrl', function ($scope, Postcodes) {

    $scope.test = JSON.stringify({
        "name":"John Johnson",
        "street":"Oslo West 16",
        "phone":"555 1234567"
    }), 4;

    $scope.postcode = null;

    $scope.awesomeThings = [1, 2, 3, 'home'];

    $scope.response = {};

    $scope.lookup = function(postcode) {
        Postcodes.lookup(postcode).then(function(response){
            $scope.response = response;
            $scope.data = JSON.stringify(response.data, 4);

            hljs.initHighlighting();
        });
    };

    // $scope.postcode = JSON.stringify(response, null, 4)
    // console.log($scope.response);
});
