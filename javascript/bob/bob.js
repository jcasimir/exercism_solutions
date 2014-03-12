var Bob = function(){
  'use strict';

  this.hey = function(message) {
    if((message.toUpperCase() === message) && (/[a-zA-Z]/.test(message))){
      return "Woah, chill out!";
    } else if (/\?$/.test(message)) {
      return "Sure.";
    } else {
      return "Whatever.";
    }
  };
};
module.exports = Bob;
