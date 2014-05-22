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

  // var baseNum = [1,4,5,9,10,40,50,90,100,400,500,1000];
  // var charator = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','M'];



  var obj = {
    convert: function(num){
      var returnNum = '';
      for(var i=0;i<baseNum.length;i++){
        if(baseNum[i] == num){
         return  charator[i];
        }
      }

      if(i === baseNum.length)
      {
        var index = 0;
        do{
           var convertNum = num%10;
            num = num/10;
            var tempStr= change(convertNum,index);
            returnNum = tempStr + returnNum;
            index++;
        }while(num);
      }

      function change(convertNum,index){
        var strReturn;
        if(convertNum === 5)
        {
           strReturn = charator[index+1];
        }
        else if(convertNum < 5)
        {
          var offSet = 5 - convertNum;
          if(convertNum === 4 )
          {
             strReturn = charator[index] + charator[index+1];
          }
          else
          {

            strReturn = charator[index] + charator[index+1];
          }
        }
      }

      return returnNum;
    },

    convert2:function(num){
      var returnStr = "";

      for(var i=baseNum.length-1;i>0;i-- ){
        while(num >= baseNum[i]) {
          returnStr += charator[i];
          num -= baseNum[i];
        }
      }
      return returnStr;

    }

   };

   return obj;
}
