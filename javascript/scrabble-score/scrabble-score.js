function Scrabble(word){
  function scoreLetter(letter){
    return 1;
  }

  function sanitizeInput(input){
    if(word == null){
      return "";
    } else {
      return input;
    }
  }

  word = sanitizeInput(word);

  scores = word.split('').map( scoreLetter );

  var total = 0;
  scores.map(function(score){ total += score });
  return total;
};

module.exports = Scrabble;