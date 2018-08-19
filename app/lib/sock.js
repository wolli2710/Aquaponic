var Sockets = function(server, aquaponic){
  var config = require('../config/server.js');
  var io = require('socket.io').listen(server);
  var logger = require('./logger.js').init();
  this.sockets = io.sockets;
  var that = this;

  this.sockets.on("connection", function(socket){
    console.log("connected");

    logger.readFile(function(data) {
      that.sockets.emit("logger", data);
    })

    socket.on("startFeeding", function(data){
      console.log(data);
      aquaponic.startFeeding();
    });

    socket.on("stopFeeding", function(data){
      console.log(data);
      aquaponic.stopFeeding();
    });

    socket.on("startPump", function(data){
      console.log(data);
      aquaponic.startPump();
    });

    socket.on("stopPump", function(data){
      console.log(data);
      aquaponic.stopPump();
    });

    socket.on("end", function(){
    });

  });
};

module.exports = {
  listen: function(server, aquaponic){
    return new Sockets(server, aquaponic);
  }
};
