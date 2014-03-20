var BeerSong = {
  verse : function(count){
    if(count == 1){
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    } else if(count == 0){
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    } else {
      return "8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n";  
    }    
  }
};

module.exports = BeerSong;
