function Triangle(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;

  this.kind = function(){
    if(this.side1 === this.side2 && this.side2 === this.side3){
      return 'equilateral';
    } else if(this.side1 === this.side2 || this.side2 === this.side3 || this.side1 == this.side3) {
      return 'isosceles';
    } else {
      return 'scalene';
    };
  };
};

module.exports = Triangle;
