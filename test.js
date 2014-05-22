"use strict";

test("1 should be I", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(1);
  ok("I" === roman, "1 should be I, current: " + roman);
});

test("5 should be V", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(5);
  ok("V" === roman, "5 should be V, current: " + roman);
});

test("10 should be X", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(10);
  ok("X" === roman, "10 should be X, current: " + roman);
});

test("4 should be IV", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(4);
  ok("IV" === roman, "4 should be IV, current: " + roman);
});

test("40 should be XL", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(40);
  ok("XL" === roman, "40 should be XL, current: " + roman);
});

test("400 should be CD", function() {
  var romansNumber = new RomansNumber();
  var roman = romansNumber.convert(400);
  ok("CD" === roman, "400 should be CD, current: " + roman);
});

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