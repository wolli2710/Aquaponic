var fs = require('fs');
var config = require('../config/server.js');

var Logger = function(){
  var currentDirectory = process.cwd();
  var logFilePath = currentDirectory + "/" + config.server.logPath;

  this.writeLine = function(msg) {
    fs.appendFile(logFilePath, msg+"\n", function(err) {
      if(err) {
        return console.log(err);
      }
    });
  };

  this.readFile = function(callback) {
    var data = fs.readFileSync(logFilePath).toString('utf8');
    callback( data );
  }
};

module.exports = {
  init: function(){
    return new Logger();
  }
};
