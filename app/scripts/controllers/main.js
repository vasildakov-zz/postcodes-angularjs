'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Postcodes
 */
app.controller('MainCtrl', function ($scope, Postcodes) {

    $scope.show = false;

    $scope.test = JSON.stringify({
        "name": "John Johnson",
        "street": "Oslo West 16",
        "phone": "555 1234567"
    }), 4;

    $scope.postcode = null;

    $scope.awesomeThings = [1, 2, 3, 'home'];

    $scope.response = {};

    $scope.lookup = function(postcode) {
        Postcodes.lookup(postcode).then(function(response){

            var str  = "";
                str += "GET /postcodes/"+postcode+"\n";
                str += "HTTP/1.1 Host: example.org\n";
                str += "Content-Type: application/json; charset=utf-8\n";
                str += "Content-Length: 124\n\n";
                str += JSON.stringify(response.data, null, 4);
            $scope.response = response;
            //$scope.data = JSON.stringify(response.data, null, Number(4));
            $scope.data = str;

        });
    };

    /* $scope.$watch($scope.data, function(newVal, oldVal){
        console.log('changed');
    }, true);*/

    // $scope.postcode = JSON.stringify(response, null, 4)
    // console.log($scope.response);
});
