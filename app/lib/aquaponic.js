var feeder = require('./stepper.js').init( [6,13,19,26] );
var pump = require('./pump.js').init( 23 );

var Aquaponic = function(){
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
    var ms = 60 * 1000;
    pump.start(ms);
  }

  this.stopPump = function() {
    pump.stop();
  }
};

module.exports = {
  init: function(){
    return new Aquaponic();
  }
};
