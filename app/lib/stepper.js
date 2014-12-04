var Stepper = function(gpioPins){
  this.gpioPins = gpioPins;
  this.gpio = require("onoff").Gpio;
  this.timer;

  this.seq = [];
  this.seq[0] = [1,0,0,0];
  this.seq[1] = [1,1,0,0];
  this.seq[2] = [0,1,0,0];
  this.seq[3] = [0,1,1,0];
  this.seq[4] = [0,0,1,0];
  this.seq[5] = [0,0,1,1];
  this.seq[6] = [0,0,0,1];
  this.seq[7] = [1,0,0,1];

  this.pinNumber = this.gpioPins.length;

  for(var i=0; i<this.pinNumber; i++){
    this.pins[i] = new this.gpio(this.gpioPins[i], 'out');
  }
};

Stepper.prototype = {
  steps360: 4076,
  pins: [],
  currentStep: 0,
  timeout: 0.01,
  maxStep: 8
};

Stepper.prototype.reset = function(pins){
  clearTimeout(this.timer);
  for(var pin = 0; pin<4; pin++){
    this.pins[pin].writeSync( 0 );
  }
};

Stepper.prototype.steps = function(n, callback){
  console.log("steps function called"+n)

  var that = this;
  that.n = parseInt(n);
  that.callback = callback;

  for(var pin = 0; pin<4; pin++){
    this.pins[pin].writeSync( parseInt(this.seq[this.currentStep][pin]) );
  }

  this.currentStep += 1
  if (this.currentStep==this.maxStep){
    this.currentStep = 0;
  }
  if (this.currentStep<0){
    this.currentStep = this.maxStep;
  }
  if(n>0){
    this.timer = setTimeout( function(){ that.steps(that.n-1, that.callback) }, that.timeout );
  } else {
    callback(this.pins);
  }
};

module.exports = {
  init: function(gpioPins){
    return new Stepper(gpioPins);
  }
};
