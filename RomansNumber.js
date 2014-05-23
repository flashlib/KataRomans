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

    // 将一个整数拆分成各个位数的和，如2999=2000+900+90+9，分别转换再组合
    convert: function(num){
        var returnStr="";

         // 将数转换成字符的数组
         var numArray = num.toString().split('');

         // 总的数字个数
         var totalDigit = numArray.length;

         // 每次取出一个数，根据其所在位数，算出其值
         for(var i = 0; i < totalDigit; i++)
         {
           var topDigitNum = numArray[i] * Math.pow(10, totalDigit - i - 1);
           returnStr += this.convertOneNum(topDigitNum);
         }
        return returnStr;
      }
  };

  return obj;
}
