function RomansNumber() {"use strict";
   var baseNumObj = [
     {number: 1, roman: 'I'},
    // {number: 4, roman: 'IV'},
     {number: 5, roman: 'V'},
    // {number: 9, roman: 'IX'},
     {number: 10, roman: 'X'},
    // {number: 40, roman: 'XL'},
     {number: 50, roman: 'L'},
    // {number: 90, roman: 'XC'},
    // {number: 100, roman: 'C'},
    // {number: 400, roman: 'CD'},
    // {number: 500, roman: 'D'},
    // {number: 900, roman: 'CM'},
    // {number: 1000, roman: 'M'},
   ];

  var obj = {
     convert: function(num) {
       var returnNum = '';
       var offset = 0;
       var baseNumberObjIndex = 0;
       var vvv = num/10;
       while(vvv >= 1){
         vvv = vvv/10;
         baseNumberObjIndex++;
        // alert(vvv);
       }

      if(baseNumberObjIndex > 0)
      {
           num = num / 10;
      }

      //alert(num);
      if (num === 9)
      {
        returnNum = baseNumObj[baseNumberObjIndex].roman + baseNumObj[baseNumberObjIndex+2].roman;
      }
      else if (num > 5) {
        offset = num - 5;

        returnNum = baseNumObj[baseNumberObjIndex+1].roman;
        for (var i = 0; i < offset; i++) {
           returnNum += baseNumObj[baseNumberObjIndex].roman;
        }
      } else if (num === 5) {
        returnNum = baseNumObj[baseNumberObjIndex+1].roman;
      } else if (num < 5) {
        offset = num;
        if (offset < 4) {// 1,2,3
          for (var i = 0; i < offset; i++) {
            returnNum += baseNumObj[baseNumberObjIndex * 2].roman;
          }
        } else// 4
        {
          returnNum = baseNumObj[baseNumberObjIndex].roman + baseNumObj[baseNumberObjIndex+1].roman;
        }
      }




      // var returnNum = '';
      // for (var i = 0; i < baseNumObj.length; i++) {
        // if (baseNumObj[i].number == num) {
          // return baseNumObj[i].roman;
        // }
      // }

      // if (i === baseNum.length) {
        // var index = 0;
        // do {
          // var convertNum = num % 10;
          // num = num / 10;
          // var tempStr = change(convertNum, index);
          // returnNum = tempStr + returnNum;
          // index++;
          // //alert(num);
        // } while(num>=1);
      // }

      // function change(convertNum, index) {
        // var strReturn;
        // if (convertNum === 5) {
          // strReturn = charator[index + 1];
        // } else if (convertNum < 5) {
          // //var offSet = 5 - convertNum;
          // if (convertNum === 4) {
            // strReturn = charator[index] + charator[index + 1];
          // } else {
            // strReturn = charator[index] + charator[index + 1];
          // }
        // } else {
//
        // }
        // return strReturn;
      // }

      return returnNum;
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
