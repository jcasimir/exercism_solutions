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
    return ((side1 + side2 < side3) || (side2 + side3 < side1) || (side1 + side3 < side2));
  }

  this.isEquilateral = function(){
    return (this.side1 === this.side2 && this.side2 === this.side3);
  }

  this.isIsoceles = function(){
    return (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 == this.side3);
  }

  this.isIllegal = function(){
    return (this.hasNegativeSide() || this.violatesTriangleEquality());
  }

  this.kind = function(){
    this.hasSides();    

    if(this.isIllegal()){
      return 'illegal';
    } else if(this.isEquilateral()){
      return 'equilateral';
    } else if(this.isIsoceles()) {
      return 'isosceles';
    } else {
      return 'scalene';
    };
  };
};

module.exports = Triangle;
