function RomansNumber() {"use strict";
   var baseNumObj = [
     {number: 1, roman: 'I'},
     {number: 5, roman: 'V'},
     {number: 10, roman: 'X'},
     {number: 50, roman: 'L'},
     {number: 100, roman: 'C'},
     {number: 500, roman: 'D'},
     {number: 1000, roman: 'M'}
   ];

  var obj = {
     convertOneNum: function(num) {
       var returnNum = '';
       var offset = 0;

       // 算出num的位数
       var baseNumberObjIndex = 0;
       var vvv = num/10;
       while(vvv >= 1){
         vvv = vvv/10;
         baseNumberObjIndex++;
         num = num / 10;
       }

      if (num === 9)
      {
        returnNum = baseNumObj[baseNumberObjIndex * 2].roman + baseNumObj[baseNumberObjIndex*2+2].roman;
      }
      else if (num > 5) {
        offset = num - 5;

        returnNum = baseNumObj[baseNumberObjIndex*2+1].roman;
        for (var i = 0; i < offset; i++) {
           returnNum += baseNumObj[baseNumberObjIndex *2 ].roman;
        }
      } else if (num === 5) {
        returnNum = baseNumObj[baseNumberObjIndex * 2+1].roman;
      } else if (num < 5) {
        offset = num;
        if (offset < 4) {// 1,2,3
          for (var i = 0; i < offset; i++) {
            returnNum += baseNumObj[baseNumberObjIndex * 2].roman;
          }
        } else// 4
        {
          returnNum = baseNumObj[baseNumberObjIndex*2].roman + baseNumObj[baseNumberObjIndex*2+1].roman;
        }
      }
      return returnNum;
    },

    convert: function(num){
        var returnStr="";
        var m = 0;
        var tempNum = num;
         do{
            returnStr = this.convertOneNum((tempNum%10) * (Math.pow(10, m))) + returnStr;
            console.log('num = ' + num + ',tempNum =' + (tempNum%10) * (Math.pow(10, m)));
            tempNum = Math.floor(tempNum/10);

            m++;
         }while(tempNum>=1);
        return returnStr;
      }

    // convert2: function(num) {
      // var returnStr = "";
//
      // for (var i = baseNum.length - 1; i > 0; i--) {
        // while (num >= baseNum[i]) {
          // returnStr += charator[i];
          // num -= baseNum[i];
        // }
      // }
      // return returnStr;
//
    // }
  };

  return obj;
}
