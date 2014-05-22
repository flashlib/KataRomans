"use strict";

test("1 should be I", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(1);
  ok("I" === roman, "1 should be I, current: " + roman);
});

test("2 should be II", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(2);
  ok("II" === roman, "2 should be II, current: " + roman);
});

test("3 should be III", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(3);
  ok("III" === roman, "3 should be III, current: " + roman);
});

test("4 should be IV", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(4);
  ok("IV" === roman, "4 should be IV, current: " + roman);
});

test("5 should be V", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(5);
  ok("V" === roman, "5 should be V, current: " + roman);
});

test("6 should be VI", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(6);
  ok("VI" === roman, "6 should be VI, current: " + roman);
});

test("7 should be VII", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(7);
  ok("VII" === roman, "7 should be VII, current: " + roman);
});

test("9 should be IX", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(9);
  ok("IX" === roman, "9 should be IX, current: " + roman);
});

test("10 should be X", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(10);
  ok("X" === roman, "10 should be X, current: " + roman);
});

test("20 should be XX", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(20);
  ok("XX" === roman, "20 should be XX, current: " + roman);
});

test("40 should be XL", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(40);
  ok("XL" === roman, "40 should be XL, current: " + roman);
});

test("50 should be L", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(50);
  ok("L" === roman, "50 should be L, current: " + roman);
});

test("60 should be L", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(60);
  ok("LX" === roman, "50 should be LX, current: " + roman);
});

test("90 should be XC", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(90);
  ok("XC" === roman, "90 should be XC, current: " + roman);
});

test("11 should be XI", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(11);
  ok("XI" === roman, "11 should be XI, current: " + roman);
});

// test("2 should be II", function() {
  // var romansNumber = new RomansNumber();
  // var roman = romansNumber.convert(1);
  // ok("II" === roman, "2 should be II, current: " + roman);
// });
// test("5 should be V", function() {
  // var romansNumber = new RomansNumber();
  // var roman = romansNumber.convert(5);
  // ok("V" === roman, "5 should be V, current: " + roman);
// });
//
// test("10 should be X", function() {
  // var romansNumber = new RomansNumber();
  // var roman = romansNumber.convert(10);
  // ok("X" === roman, "10 should be X, current: " + roman);
// });
//
// test("4 should be IV", function() {
  // var romansNumber = new RomansNumber();
  // var roman = romansNumber.convert(4);
  // ok("IV" === roman, "4 should be IV, current: " + roman);
// });
//
// test("40 should be XL", function() {
  // var romansNumber = new RomansNumber();
  // var roman = romansNumber.convert(40);
  // ok("XL" === roman, "40 should be XL, current: " + roman);
// });
//
// test("400 should be CD", function() {
  // var romansNumber = new RomansNumber();
  // var roman = romansNumber.convert(400);
  // ok("CD" === roman, "400 should be CD, current: " + roman);
// });

// 500, 900, 1000...


// test("90 should be XC", function() {
  // var romansNumber = new RomansNumber();
  // var roman = romansNumber.convert(90);
  // ok("XC" === roman, "90 should be XC, current: " + roman);
// });

// test("6 should be VI", function() {
  // var romansNumber = new RomansNumber();
  // var roman = romansNumber.convert(6);
  // ok("VI" === roman, "6 should be VI, current: " + roman);
// });

// Test RomansNumberMinus
function makeATest(number, roman)
{
  test(number + " should be " + roman, function() {
  var romansNumber = new RomansNumberMinus();
  var result = romansNumber.convert(number);
  ok(roman === result, number + " should be " + roman + ", current: " + result);
  });
}

makeATest(1, "I");
makeATest(2, "II");
makeATest(3, "III");

makeATest(10, "X");
makeATest(20, "XX");
makeATest(30, "XXX");

makeATest(4, "IV");
makeATest(5, "V");

makeATest(6, "VI");
makeATest(7, "VII");
makeATest(8, "VIII");

makeATest(9, "IX");

makeATest(11, "XI");

// ...

makeATest(2999, "MMCMXCIX");