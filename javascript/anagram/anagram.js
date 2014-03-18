var Anagram = function(word){
  this.word = word;

  this.match = function(possiblities){
    var results = possiblities.filter(function (possibility){
      // console.log("Looking at " + possibility);
      // console.log("  - " + sortedLetters(possibility));
      // console.log("  - " + sortedLetters(word));
      // console.log("  = " + sortedLetters(possibility) === sortedLetters(word));
      return sortedLetters(possibility) === sortedLetters(word);
    });
    return results;
  };

  sortedLetters = function(input){
    return input.split('').sort().join().toLowerCase();
  }
};

module.exports = Anagram;
