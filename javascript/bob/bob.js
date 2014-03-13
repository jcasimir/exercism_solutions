var Bob = function(){
  'use strict';

  this.hey = function(message) {
    if((message.toUpperCase() === message) && (/[a-zA-Z]/.test(message))){
      return "Woah, chill out!";
    } else if (/\?$/.test(message)) {
      return "Sure.";
    } else if (/^\s*$/.test(message)) {
      return 'Fine. Be that way!';
    } else {
      return "Whatever.";
    }
  };
};
module.exports = Bob;
