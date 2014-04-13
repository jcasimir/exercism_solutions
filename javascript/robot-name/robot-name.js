function Robot(){
  this.generateName = function(){ return "AB" + Math.random(5) };

  this.name = this.name || this.generateName();
  
  this.reset = function(){ this.name = undefined; };
};

module.exports = Robot;
