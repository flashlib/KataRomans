function RomansNumber(){
  "use strict";

  // var baseRoman = {
    // '1':'I',
    // '4':'IV',
    // '5':'V',
    // '9':'IX',
    // '10':'X',
    // '40':'XL',
    // '50':'L',
    // '90':'XC',
    // '100':'C',
    // '400':'CD',
    // '500':'D',
    // '900':'CM',
    // '1000':'M',
//
  // };

  var baseNum = [1,5,10,50,100,500,1000];
  var charator = ['I','V','X','L','C','D','M'];

  var obj = {
    convert: function(num){
      var returnNum;
      for(var i=0;i<baseNum.length;i++){
        if(baseNum[i] == num){
          returnNum = charator[i];
        }
      }
      return returnNum;
    }
   };

   return obj;
}
