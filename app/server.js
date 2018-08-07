(function(){
    var express = require('express');
    var server = require('./lib/web.js').listen(express);
    var aquaponic = require('./lib/aquaponic.js').init();

    var io = require('./lib/sock.js').listen(server, aquaponic);
    aquaponic.sockets = io.sockets;
})();
