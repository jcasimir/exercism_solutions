function Robot(){
  this.name = this.name || "AB" + Math.random(5);

  this.reset = function(){
    this.name = undefined;    
  };
};

module.exports = Robot;
