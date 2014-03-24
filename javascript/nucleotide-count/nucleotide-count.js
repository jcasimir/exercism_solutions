var DNA = function(sequence){
  this.sequence = sequence;

  this.count = function(marker){ 
    return sequence.split(marker).length - 1;
  };

  this.nucleotideCounts = { 
      'A' : this.count('A'),
      'T' : this.count('T'), 
      'C' : this.count('C'), 
      'G' : this.count('G')
  };
  
};

module.exports = DNA;
