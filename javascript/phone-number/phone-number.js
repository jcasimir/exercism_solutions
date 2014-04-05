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
        return input;
      };
    },
    areaCode : function(){
      return this.number().slice(0,3);
    },
    toString : function(){
      var number = this.number();
      return "(" + this.areaCode() + ") " + number.slice(3, 6) + "-" + number.slice(6);
    }
  }
};

module.exports = PhoneNumber;
