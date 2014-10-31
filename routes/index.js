var express = require('express');
var router = express.Router();
var WSClient = require('websocket').client;


//var connection; // ws connection to blockchain
//var client = new WSClient(); // see https://github.com/Worlize/WebSocket-Node#client-example
//var url = 'ws://ws.127.0.0.1:5001';
//client.on('connect', function (c) {
//    connection = c;
//    console.log('Blockchain connection established');
//    connection.on('close', function () {
//        console.log('Blockchain connection close');
//        client.connect(url);
//    });
//    connection.on('error', function () {
//        console.log('Blockchain connection error');
//        client.connect(url);
//    });
//    connection.on('message', function (message) {
//        try {
//            var data = JSON.parse(message.utf8Data);
//        } catch (e) {
//            console.log('BBridge wsclient JSON.parse error, json parse');
//        }
//    });
//    connection.sendUTF('{"op":"addr_sub", "addr": "' + config.BITCOIN_PUBLIC_ADDRESS + '"}');
//});
////        connection && connection.sendUTF('{"op":"ping_block"}'); // testing websocket connection
//client.on('connectFailed', function (err) {
//    console.log('Blockchain connection fail: ' + err + err.stack);
//});
//
//client.connect(url);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Public Interface' });
});

module.exports = router;
