var toRna = function (input){
  function complementFor(dna){
    if(dna == "C"){
      return "G";
    } else if(dna == "G"){
      return "C";
    } else if(dna == "A"){
      return "U";
    } else if(dna == "T"){
      return "A";
    }
  };

  return complementFor(input);
};

module.exports = toRna;
