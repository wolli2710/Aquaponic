(function(){
    var express = require('express');
    var server = require('./lib/web.js').listen(express);
    var apuaponic = require('./lib/aquaponic.js').init();

    var io = require('./lib/sock.js').listen(server, apuaponic);
    apuaponic.sockets = io.sockets;
})();
