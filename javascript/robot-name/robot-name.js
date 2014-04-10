function Robot(){
  this.name = this.name || "AB" + Math.random(5);
};

module.exports = Robot;
