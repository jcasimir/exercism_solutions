function Triangle(side1, side2, side3){
  this.hasSides = function(){
    if(side1 + side2 + side3 == 0){
      throw "Invalid triangle dimensions";
    };
  };

  this.hasNegativeSide = function(){
    return (side1 <= 0 || side2 <= 0 || side3 <= 0);
  };

  this.violatesTriangleEquality = function(){
    return ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2));
  }

  this.isIllegal = function(){
    return (this.hasNegativeSide() || this.violatesTriangleEquality()) && 'illegal';
  }

  this.isEquilateral = function(){
    return (side1 === side2 && side2 === side3) && 'equilateral';
  }

  this.isIsosceles = function(){
    return (side1 === side2 || side2 === side3 || side1 == side3) && 'isosceles';
  }

  this.kind = function(){
    this.hasSides();    
    return this.isIllegal() || this.isEquilateral() || this.isIsosceles() || 'scalene';
  };
};

module.exports = Triangle;
