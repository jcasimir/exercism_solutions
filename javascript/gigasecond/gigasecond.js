function Gigasecond(birthDate){
  this.birthMillisecond = birthDate.getTime();
  this.one = Math.pow(10,12);
  this.error = -2800000;

  this.date = function(){
    return new Date(this.birthMillisecond + this.one + this.error);
  };
};

module.exports = Gigasecond;
