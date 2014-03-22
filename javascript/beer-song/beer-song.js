var BeerSong = {
  verse : function(count){
    if(count == 0){
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    } else if(count == 2){
      return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
    } else if(count == 1){
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    } else {
      return count + " bottles of beer on the wall, " + count + " bottles of beer.\nTake one down and pass it around, " + (count-1) + " bottles of beer on the wall.\n";  
    }    
  },
  sing : function(verses_start, verses_stop){
    var result = "";
    verses_stop = verses_stop || 0
    for(var v = verses_start; v > verses_stop; v--){
      result = result + this.verse(v) + '\n';
    }
    return result + this.verse(v);
  }  
};

module.exports = BeerSong;
