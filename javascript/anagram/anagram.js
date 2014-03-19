var Anagram = function(word){
  this.word = word;

  this.match = function(possiblities){
    return possiblities.filter(function (possibility){
      return notIdentical(possibility, word) && sameLetters(possibility, word);
    });
  };

  function notIdentical(first, second){
    return first.toLowerCase() != second.toLowerCase()
  }

  function sameLetters(first, second){
    return sortedLetters(first) === sortedLetters(second)
  }

  function sortedLetters(input){
    return input.toLowerCase().split('').sort().join();
  }
};

module.exports = Anagram;
