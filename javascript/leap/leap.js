function Leap(year){
  function fourHundred(){
    return year % 400 == 0;
  };

  function notOneHundred(){
    return year % 100 != 0;
  };

  function four(){
    return year % 4 == 0;
  };

  return fourHundred() || (notOneHundred() && four());
};

module.exports = Leap;