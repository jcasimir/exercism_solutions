function wordsFrom(input){
  return input.split(' ');
}

function sanitize(input){
  return input.replace(/\W/g, '').toLowerCase();
}

function hasLetters(input){
  return input.match(/\w/);
}

function incrementCounter(word, counter){
  if(!counter[word]){
    counter[word] = 0;
  }
  counter[word]++;
  return counter;
}

var words = function(input){
  'use strict';
  var output = { constructor : 0};
  wordsFrom(input).map( function(word){
    word = sanitize(word);
    if(hasLetters(word)){
      output = incrementCounter(word, output);
    }
  });
  return output;
};
module.exports = words;
