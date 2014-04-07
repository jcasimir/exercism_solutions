function School(){
  var storedNames = {};

  this.roster = function(){
    return storedNames;
  };
  this.add = function(name, grade){
    storedNames[grade] = storedNames[grade] || [];
    storedNames[grade].push(name);
  }
};

module.exports = School;