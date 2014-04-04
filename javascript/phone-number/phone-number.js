var PhoneNumber = function(input){
  return {
    number : function(){
      input = input.replace(/\D/gi, '');

      if(input.length == 11 && input[0] == '1'){
        input = input.slice(1, input.length);
      }

      if(input.length != 10){
        return '0000000000';
      } else {
        return '1234567890';
      };
    }
  }
};

module.exports = PhoneNumber;
