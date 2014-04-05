var PhoneNumber = function(input){
  return {
    digits : function(data){
      return data.replace(/\D/gi, '');
    },
    trim : function(data){
      if(data.length == 11 && data[0] == '1'){
        data = data.slice(1, data.length);
      }
      return data;
    },
    checkLength : function(data){
      if(data.length != 10){
        data = '0000000000';
      };
      return data;
    },
    number : function(){
      return this.checkLength(this.trim(this.digits(input)));
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
