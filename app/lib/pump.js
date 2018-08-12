var gpio = require("onoff").Gpio;
var config = require('../config/server.js');

var Pump = function(gpioPinNumber){
  this.on = false;
  this.pin = new gpio(gpioPinNumber, 'out');
  this.pin.writeSync( 0 );
};

Pump.prototype.stop = function(){
  console.log("stoped pump")
  this.on = false;
  this.pin.writeSync( 0);
};

Pump.prototype.start = function(){
  console.log("started pump")
  var that = this;
  var ms = config.pump.wateringDuration;
  var currentMilliseconds = (ms != null) ? ms : config.pump.maxTime;

  if(this.on === false){
    this.on = true;
    this.pin.writeSync( 1 );
    setTimeout( function(){ that.stop() }, currentMilliseconds );
  } else {
    console.log("already started");
  }
};

module.exports = {
  init: function(gpioPinNumber){
    return new Pump(gpioPinNumber);
  }
};
