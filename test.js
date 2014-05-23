"use strict";

  // Test RomansNumberMinus
  function makeARomansNumberMinusTest(number, roman, strategy) {
    test(number + " should be " + roman, function() {
      var result = strategy.convert(number);
      ok(roman === result, number + " should be " + roman + ", current: " + result);
    });
  }

  function testAllRomans(strategy) {
    var testDatas = [{
      number: 1,
      roman: "I"
    }, {
      number: 2,
      roman: "II"
    }, {
      number: 3,
      roman: "III"
    }, {
      number: 4,
      roman: "IV"
    }, {
      number: 5,
      roman: "V"
    }, {
      number: 6,
      roman: "VI"
    }, {
      number: 9,
      roman: "IX"
    }, {
      number: 10,
      roman: "X"
    }, {
      number: 21,
      roman: "XXI"
    }, {
      number: 2999,
      roman: "MMCMXCIX"
    }];

    for (var i = 0; i < testDatas.length; i++) {
      makeARomansNumberMinusTest(testDatas[i].number, testDatas[i].roman, strategy);
    }
  }

testAllRomans(new RomansNumber());
testAllRomans(new RomansNumberMinus());
