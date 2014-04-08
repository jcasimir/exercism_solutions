function School(){
  var storedNames = {};
  this.fetch = function(level){
    storedNames[level] = storedNames[level] || [];
    return storedNames[level];
  }

  this.roster = function(){
    return storedNames;
  };
  this.add = function(name, level){
    this.fetch(level).push(name);
  };
  this.grade = function(level){
    return this.fetch(level).sort();
  };
};

module.exports = School;