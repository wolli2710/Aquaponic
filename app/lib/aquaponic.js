var feeder = require('./stepper.js').init( [6,13,19,26] );
var pump = require('./pump.js').init( 23 );
var config = require('../config/server.js');

var Aquaponic = function(){

  var aquaponic = this;

  this.startFeeding = function(){
    // 4076 are 360 degrees
    var counter = 4076 * 20;
    feeder.steps(counter, function(pins) {
      feeder.reset();
    });
  };

  this.stopFeeding = function(){
    feeder.reset();
  };

  this.startPump = function() {
    pump.start();
  }

  this.stopPump = function() {
    pump.stop();
  }

  var startPumping = function(){
    var ms = config.pump.wateringDuration;
    var currentMilliseconds = (ms != null) ? ms : config.pump.maxTime;

    aquaponic.startPump();
    setTimeout(function () {
      stopPumping();
    }, currentMilliseconds);
  };

  var stopPumping = function(){
    var ms = config.pump.pauseDuration;
    var currentMilliseconds = (ms != null) ? ms : config.pump.maxTime;

    aquaponic.stopPump();
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
