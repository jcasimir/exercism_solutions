var words = function(input){
  'use strict';
  var individual_words = input.split(' ');
  var output = {};

  for(var position in individual_words){
    var word = individual_words[position];
    word = word.replace(/\W/g, '').toLowerCase();
    if(word.match(/\w/)){
      if(output[word]){
        output[word] = output[word] + 1;
      } else {
        output[word] = 1;
      }
    }
  }
  return output;
};
module.exports = words;
