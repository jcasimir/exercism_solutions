var DNA = function(sequence){
  return {
    hammingDistance : function(comparator){
      var distance = 0;
      var sequence_elements = sequence.split('');
      var comparator_elements = comparator.split('');

      sequence_elements.slice(0, comparator_elements.length).forEach(function(element, index){
        if(element != comparator_elements[index]){
          distance++;
        }
      });

      return distance;
    }
  }
};

module.exports = DNA;
