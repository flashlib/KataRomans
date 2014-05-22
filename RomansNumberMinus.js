function RomansNumberMinus() {
  "use strict";

  var obj = {
    baseDataArray:[
      {number: 10, roman:"X"}
      ,{number: 1, roman:"I"}
    ],
    convert: function(num) {
      var returnStr = "";
      var tempNum = num;

      for(var i = 0; i < 2; i++)
      {
        while(tempNum >= this.baseDataArray[i].number)
        {
          returnStr += this.baseDataArray[i].roman;
          tempNum -= this.baseDataArray[i].number;
        }
      }

      return returnStr;
    }
  }

  return obj;
}
