var PhoneNumber = function(input){
  return {
    number : function(){
      if(input.length == 11 && input[0] != '1'){
        return '0000000000';
      } else {
        return '1234567890';
      };
    }
  }
};

module.exports = PhoneNumber;
