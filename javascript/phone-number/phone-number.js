var PhoneNumber = function(input){
  return {
    digits : function(){
      return input.replace(/\D/gi, '');
    },
    number : function(){
      var digits = this.digits();
      
      if(digits.length == 11 && digits[0] == '1'){
        digits = digits.slice(1, digits.length);
      }

      if(digits.length != 10){
        return '0000000000';
      } else {
        return digits;
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
