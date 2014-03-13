var Bob = function(){
  'use strict';

  function question(input){
    return /\?$/.test(input);
  }

  this.hey = function(message) {
    if((message.toUpperCase() === message) && (/[a-zA-Z]/.test(message))){
      return "Woah, chill out!";
    } else if (question(message)) {
      return "Sure.";
    } else if (/^\s*$/.test(message)) {
      return 'Fine. Be that way!';
    } else {
      return "Whatever.";
    }
  };
};
module.exports = Bob;
