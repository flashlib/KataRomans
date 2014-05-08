function RomansNumber(){
  "use strict";

  var romanSource = ["I"];
  var baseRoman = {
    '1':'I',
    '4':'IV',
    '5':'V',
    '9':'IX',
    '10':'X',
    '40':'XL',
    '50':'L',
    '90':'XC',
    '100':'C',
    '400':'CD',
    '500':'D',
    '900':'CM',
    '1000':'M',

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
