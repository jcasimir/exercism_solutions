var DNA = function(sequence){
  this.sequence = sequence;
  this.acceptedMarkers = ['A', 'T', 'C', 'G', 'U'];

  this.count = function(marker){
    this.checkMarker(marker);
    return sequence.split(marker).length - 1;
  };

  this.checkMarker = function(marker){
    if(this.acceptedMarkers.indexOf(marker) == -1){
      throw(new Error("Invalid Nucleotide"));
    };    
  }

  this.nucleotideCounts = { 
      'A' : this.count('A'),
      'T' : this.count('T'), 
      'C' : this.count('C'), 
      'G' : this.count('G')
  };
};

module.exports = DNA;
