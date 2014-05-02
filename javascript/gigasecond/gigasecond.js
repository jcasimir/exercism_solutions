function Gigasecond(birthDate){
  this.birthMillisecond = birthDate.getTime();
  this.gigaDate = new Date(this.birthMillisecond + Math.pow(10,12) - 2800000);
  this.date = function(){
    return this.gigaDate;
  };
};

module.exports = Gigasecond;
