function Triangle(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.hasSides = function(){
  if(this.side1 + this.side2 + this.side3 == 0){
    throw "Invalid triangle dimensions";
  };
};

Triangle.prototype.hasNegativeSide = function(){
  return (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0);
};

Triangle.prototype.violatesTriangleEquality = function(){
  var side1 = this.side1, side2 = this.side2, side3 = this.side3;
  return ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2));
}

Triangle.prototype.isIllegal = function(){
  return (this.hasNegativeSide() || this.violatesTriangleEquality()) && 'illegal';
}

Triangle.prototype.isEquilateral = function(){
  var side1 = this.side1, side2 = this.side2, side3 = this.side3;
  return (this.side1 === this.side2 && this.side2 === this.side3) && 'equilateral';
}

Triangle.prototype.isIsosceles = function(){
  var side1 = this.side1, side2 = this.side2, side3 = this.side3;
  return (side1 === side2 || side2 === side3 || side1 == side3) && 'isosceles';
}

Triangle.prototype.kind = function(){
  this.hasSides();    
  return this.isIllegal() || this.isEquilateral() || this.isIsosceles() || 'scalene';
};

module.exports = Triangle;
