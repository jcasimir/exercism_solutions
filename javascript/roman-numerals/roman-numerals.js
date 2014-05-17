function Roman(decimal){
  var remainder = decimal;
  var result = "";

  while(remainder > 0){
    remainder -= 1;
    result = result + "I";
  };

  return result;
};

module.exports = Roman;
