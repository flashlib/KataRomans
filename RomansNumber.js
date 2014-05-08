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
      var basic = baseRoman[num.toString()];
      var lessbasic = baseRoman[(num+1).toString()];
      if(basic){
        return basic;
      }
      else if(lessbasic){
        return baseRoman[(1).toString()]+lessbasic;
      }
    }
  };

  return obj;
}
