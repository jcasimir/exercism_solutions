function SpaceAge(seconds){
  this.seconds = seconds;
  this.earthYear = 31557600.0;
  this.onEarthPrecise = function(){
    return this.seconds / this.earthYear;
  };

  this.onEarthAdjustedBy = function(factor){
    return this.round( this.onEarthPrecise() / factor );
  };

  this.onEarth = function(){
    return this.onEarthAdjustedBy(1.0);
  };

  this.onMercury = function(){
    return this.onEarthAdjustedBy(0.2408467);
  };

  this.onVenus = function(){
    return this.onEarthAdjustedBy(0.61519726);
  };

  this.onMars = function(){
    return this.onEarthAdjustedBy(1.8808158);
  };

  this.onJupiter = function(){
    return this.onEarthAdjustedBy(11.862615);
  };

  this.onSaturn = function(){
    return this.onEarthAdjustedBy(29.447498);
  };

  this.onUranus = function(){
    return this.onEarthAdjustedBy(84.016846);
  };

  this.onNeptune = function(){
    return this.onEarthAdjustedBy(164.79132);
  };

  this.round = function(number){
    return parseFloat(number.toFixed(2));
  }
};

module.exports = SpaceAge;
