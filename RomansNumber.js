function RomansNumber(){
  "use strict";

  var romanSource = ["I"];
  var baseRoman = {
    '1':'I',
    '5':'V',
    '10':'X',
    '50':'L',
    '100':'C',
    '500':'D',
    '1000':'M'
  };
  var obj = {
    number:0,
    convert: function(num){
      return baseRoman[num.toString()];
    }
  };

  return obj;
}
