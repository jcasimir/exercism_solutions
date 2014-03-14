var words = function(input){
  'use strict';

  var individual_words = input.split(' ');
  var output = {};

  for(var position in individual_words){
    var word = individual_words[position]
    if(output[word]){
      output[word] = output[word] + 1;
    } else {
      output[word] = 1;
    }
  }
  return output;
};
module.exports = words;
