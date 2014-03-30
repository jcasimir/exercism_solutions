var toRna = function (input){
  var mapping = { "C" : "G",
                  "G" : "C",
                  "A" : "U",
                  "T" : "A" };

  function complementFor(dna){
    return mapping[dna];
  };

  var nucleotides = input.split('');
  return nucleotides.map(function(element){
    return complementFor(element);
  }).join('');
};

module.exports = toRna;
