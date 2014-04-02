var DNA = function(base){
  return {
    examinationSequence : function(base, comparator){
      return base.slice(0, comparator.length);
    },
    
    hammingDistance : function(comparator){
      var distance = 0;
      var baseElements = base.split('');
      var comparatorElements = comparator.split('');

      this.examinationSequence(baseElements, comparatorElements).forEach(function(element, index){
        if(element != comparatorElements[index]){
          distance++;
        }
      });

      return distance;
    }
  }
};

module.exports = DNA;
