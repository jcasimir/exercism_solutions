function Triangle(side1, side2, side3){
  this.hasSides = function(){
    if(!side1 || !side2 || !side3 || (side1 + side2 + side3 == 0)) {
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
    return this.hasNegativeSide() || this.violatesTriangleEquality();
  }

  this.isEquilateral = function(){
    return side1 === side2 && side2 === side3;
  }

  this.isIsosceles = function(){
    return side1 === side2 || side2 === side3 || side1 === side3;
  }

  this.kind = function(){
    this.hasSides();
    
    if this.isIllegal() {
      return 'illegal';
    } else if this.isEquilateral() {
      return 'equilateral';
    } else if this.isIsosceles() {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  };
};

module.exports = Triangle;
