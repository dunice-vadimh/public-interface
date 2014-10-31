var controllers = angular.module('controllers', []);

controllers.controller('IndexController', ['$scope', '$rootScope', 'Socket', '$http', function($scope, $rootScope, Socket, $http) {

    $scope.stellar = {}

    $scope.socket = new WebSocket("wss://127.0.0.1:5001");
    $scope.socket.onopen = function(evt) {
        console.log('>>>456453>>',evt);
        $scope.socket.send('111111111111')
    };


    $scope.onSend = function(){
//        Socket.connectUser($scope.stellar)
    }

    $scope.login = function(){

        //Generating Receiving Addresses API call to generate a new bitcoin address ready to receive payments
        var _callback = 'http://bbridgePublicInterface'
        var _url = 'https://blockchain.info/api/receive?method=create&address='+$scope.stellar.bitcoinAddress+'&callback='

        $http.get(_url +_callback).
            success(function(data, status, headers, config) {
                console.log('success', data)
                $scope.stellar.receivingAddress = data.input_address

            }).
            error(function(data, status, headers, config) {
                console.log('error', data)

            });
    }
}]);