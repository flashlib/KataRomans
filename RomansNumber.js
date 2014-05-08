function RomansNumber(){
  "use strict";

  var romanSource = ["I"];
  var obj = {
    number:0,
    convert: function(num){
      var romanStr;
      if(num === 1)
      {
        romanStr = 'I';
      }
      else{
        romanStr = 'V';
      }

      return romanStr;
    }
  };
  return obj;
}
