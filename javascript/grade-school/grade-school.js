function School(){
  var storedNames = {};

  this.roster = function(){
    return storedNames;
  };
  this.add = function(name, grade){
    storedNames[grade] = [name];
  }
};

module.exports = School;