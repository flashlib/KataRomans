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