function Triangle(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;

  this.hasSides = function(){
    if(!(this.side1 + this.side2 + this.side3 > 0)){
      throw "Invalid triangle dimensions";
    };
  };

  this.hasNegativeSide = function(){
    return (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0);
  };

  this.violatesTriangleEquality = function(){
    return ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2));
  }

  this.isIllegal = function(){
    if(this.hasNegativeSide() || this.violatesTriangleEquality()){
      return 'illegal'
    };
  }

  this.isEquilateral = function(){
    if(this.side1 === this.side2 && this.side2 === this.side3){
      return 'equilateral';
    };
  }

  this.isIsosceles = function(){
    if(this.side1 === this.side2 || this.side2 === this.side3 || this.side1 == this.side3){
      return 'isosceles';
    };
  }

  this.kind = function(){
    this.hasSides();    
    return this.isIllegal() || this.isEquilateral() || this.isIsosceles() || 'scalene';
  };
};

module.exports = Triangle;
