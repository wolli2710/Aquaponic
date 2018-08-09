var feeder = require('./stepper.js').init( [6,13,19,26] );
var pump = require('./pump.js').init( 23 );
var config = require('../config/server.js');

var Aquaponic = function(){

  var startFeeding = function(){
    // 4076 are 360 degrees
    var counter = 4076 * 20;
    feeder.steps(counter, function(pins) {
      feeder.reset();
    });
  };

  var stopFeeding = function(){
    feeder.reset();
  };

  var startPump = function() {
    pump.start();
  }

  var stopPump = function() {
    pump.stop();
  }

  var startPumping = function(){
    var ms = config.pump.duration;
    var currentMilliseconds = (ms != null) ? ms : (60 * 1000);

    startPump();
    setTimeout(function () {
      stopPumping();
    }, currentMilliseconds);
  };

  var stopPumping = function(){
    var ms = config.pump.duration;
    var currentMilliseconds = (ms != null) ? ms : (60 * 1000);

    stopPump();
    setTimeout(function () {
      startPumping();
    }, currentMilliseconds);
  };

  startPumping();
};

module.exports = {
  init: function(){
    return new Aquaponic();
  }
};
