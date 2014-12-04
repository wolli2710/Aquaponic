var gpio = require("onoff").Gpio;

var Pump = function(gpioPinNumber){
  this.on = false;
  this.pin = new gpio(gpioPinNumber, 'out');
  this.pin.writeSync( 1 );
};

Pump.prototype = {
  maxTime: 100000
};

Pump.prototype.stop = function(){
  console.log("stoped pump")
  this.on = false;
  this.pin.writeSync( 1 );
};

Pump.prototype.start = function(timeout){
  console.log("started pump")
  var that = this;

  if(this.on === false){
    this.on = true;
    this.pin.writeSync( 0 );
    var currentTimeout = (timeout > this.maxTime) ? this.maxTime : timeout;
    setTimeout( function(){ that.stop() }, currentTimeout );
  } else {
    console.log("already started");
  }
};

module.exports = {
  init: function(gpioPinNumber){
    return new Pump(gpioPinNumber);
  }
};
