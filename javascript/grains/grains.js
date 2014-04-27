function Grains(){
  this.square = function(location){
    return Math.pow(2,location - 1);
  };

  this.total = function(){
    var sum = 0;
    for(var i = 1; i <= 64; i++){
      sum += this.square(i);
    }
    return sum;
  }
};

module.exports = Grains;
