var Bob = function(){
  'use strict';

  function question(input){
    return /\?$/.test(input);
  }

  function empty(input){
    return /^\s*$/.test(input);
  }

  function shouting(input){
    return (input.toUpperCase() === input) && (/[a-zA-Z]/.test(input))
  }

  this.hey = function(message) {
    if(shouting(message)){
      return "Woah, chill out!";
    } else if (question(message)) {
      return "Sure.";
    } else if (empty(message)) {
      return 'Fine. Be that way!';
    } else {
      return "Whatever.";
    }
  };
};
module.exports = Bob;
