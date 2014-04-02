var DNA = function(sequence){
  return {
    hammingDistance : function(comparator){
      count = 0;
      var sequence_elements = sequence.split('');
      var comparator_elements = comparator.split('');
      for(var i = 0; i < sequence_elements.length; i++){
        if(comparator_elements[i] && 
          (sequence_elements[i] != comparator_elements[i])){
          count++;
        }
      }
      return count;
    }
  }
};

module.exports = DNA;
