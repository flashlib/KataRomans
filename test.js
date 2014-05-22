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