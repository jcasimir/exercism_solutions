var DNA = function(sequence){
  this.sequence = sequence;
  this.displayedMarkers = ['A', 'T', 'C', 'G'];
  this.acceptedMarkers = this.displayedMarkers + ['U'];

  this.count = function(marker){
    this.checkMarker(marker);
    return sequence.split(marker).length - 1;
  };

  this.checkMarker = function(marker){
    if(this.acceptedMarkers.indexOf(marker) == -1){
      throw(new Error("Invalid Nucleotide"));
    };    
  }

  this.nucleotideCounts = {};
  for(var i = 0; i < this.displayedMarkers.length; i++){
    var marker = this.displayedMarkers[i];
    this.nucleotideCounts[marker] = this.count(marker);
  }
};

module.exports = DNA;
