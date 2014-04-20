function etl(inputs){
  var results = {};
  for (var key in inputs){
    inputs[key].map(function(value){
      value = value.toLowerCase();
      results[value] = results[value] || 0;
      results[value] += 1;
    });
  }
  return results;
};

module.exports = etl;
