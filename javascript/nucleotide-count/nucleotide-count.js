var DNA = function(sequence){

  return {
    nucleotideCounts : { 
      'A' : 0, 
      'T' : 0, 
      'C' : 0, 
      'G' : 0 
    },
    count : function(marker){ 
      return sequence.split(marker).length - 1;
    }
  };
};

module.exports = DNA;
