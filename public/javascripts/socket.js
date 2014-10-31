var services = angular.module('btford.socket-io')

services.factory('Socket', ['$http', '$rootScope', 'socketFactory',
    function ($http, $rootScope, socketFactory) {
        var _host = 'https://127.0.0.1:5001'
//        var _host = 'http://localhost:3000/bbridge'
        var myIoSocket = io.connect(_host);
        var socket = socketFactory({
            ioSocket: myIoSocket
        })

        socket.on('stellar-getRequest', function (data) {
            console.log('socket.on getRequest', data)
        });

        socket.on('connect', function (data) {
            console.log('socket.on getRequest', data)
        });

        return {
            connectUser : function(data){
                console.log('socket.emit connectUser')
                socket.emit('stellar-connectUser', data);
            }
        }
    }]);