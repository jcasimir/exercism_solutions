var Bob = function(){
  'use strict';

  this.hey = function(message) {
    if(message.toUpperCase() === message){
      return "Woah, chill out!";
    } else {
      return "Whatever.";
    }
  };
};
module.exports = Bob;
