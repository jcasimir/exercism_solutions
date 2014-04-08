function School(){
  var storedNames = {};
  this.grade = function(level){
    storedNames[level] = storedNames[level] || [];
    return storedNames[level];
  }

  this.roster = function(){
    return storedNames;
  };

  this.add = function(name, level){
    var pre = this.grade(level)
    pre.push(name);
    pre.sort();
  };
};

module.exports = School;