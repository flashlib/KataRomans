function RomansNumberMinus() {
  "use strict";

  var obj = {
    baseDataArray:[
      {number: 1000, roman:"M"}
      ,{number: 900, roman:"CM"}
      ,{number: 500, roman:"D"}
      ,{number: 400, roman:"CD"}
      ,{number: 100, roman:"C"}
      ,{number: 90, roman:"XC"}
      ,{number: 50, roman:"L"}
      ,{number: 40, roman:"XL"}
      ,{number: 10, roman:"X"}
      ,{number: 9, roman:"IX"}
      ,{number: 5, roman:"V"}
      ,{number: 4, roman:"IV"}
      ,{number: 1, roman:"I"}
    ],
    convert: function(num) {
      var returnStr = "";
      var tempNum = num;

      for(var i = 0; i < this.baseDataArray.length; i++)
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
