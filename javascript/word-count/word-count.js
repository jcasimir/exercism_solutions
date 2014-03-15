function words_from(input){
  return input.split(' ');
}

function sanitize(input){
  return input.replace(/\W/g, '').toLowerCase();
}

function has_letters(input){
  return input.match(/\w/);
}

function increment_counter(word, counter){
  if(!counter[word]){
    counter[word] = 0;
  }
  counter[word] = counter[word] + 1;
  return counter;
}

var words = function(input){
  'use strict';
  var output = {};
  var individual_words = words_from(input);
  individual_words.map( function(word){
    word = sanitize(word);
    if(has_letters(word)){
      output = increment_counter(word, output);
    }
  });
  return output;
};
module.exports = words;
