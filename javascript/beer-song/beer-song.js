var BeerSong = {
  verse : function(count){
    if(count == 0){
      return "No more bottles of beer on the wall, no more bottles of beer.\n" + 
             "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    } else {
      return this.bottles(count) + " of beer on the wall, " + 
             this.bottles(count) + " of beer.\n" +
             "Take " + this.next_bottle(count) + " down and pass it around, " + 
             this.bottles(count - 1) + " of beer on the wall.\n";  
    }    
  },
  sing : function(verses_start, verses_stop){
    var result = "";
    verses_stop = verses_stop || 0
    for(var v = verses_start; v > verses_stop; v--){
      result = result + this.verse(v) + '\n';
    }
    return result + this.verse(v);
  },
  bottles : function(count){
    if(count == 0){
      return "no more bottles"
    } else if(count == 1){
      return "1 bottle";
    } else {
      return count + " bottles";
    }
  },
  next_bottle : function(count){
    if(count == 1){
      return "it";
    } else {
      return "one";
    }
  }
};

module.exports = BeerSong;
