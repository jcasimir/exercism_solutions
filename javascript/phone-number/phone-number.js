var PhoneNumber = function(input){
  return {
    digits : function(unclean){
      return unclean.replace(/\D/gi, '');
    },
    trim : function(data){
      if(data.length == 11 && data[0] == '1'){
        data = data.slice(1, data.length);
      }
      return data;
    },
    number : function(){
      var digits = this.digits(input);
      digits = this.trim(digits);

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
