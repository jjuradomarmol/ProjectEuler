// Problem 25

// The Fibonacci sequence is defined by the recurrence relation:

//     Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

// Hence the first 12 terms will be:

//     F1 = 1
//     F2 = 1
//     F3 = 2
//     F4 = 3
//     F5 = 5
//     F6 = 8
//     F7 = 13
//     F8 = 21
//     F9 = 34
//     F10 = 55
//     F11 = 89
//     F12 = 144

// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

var bigNumber = {};

bigNumber.digitArrayAdd = function(digits1, digits2) {
  var sumDigits = [];
  var length =
    digits1.length > digits2.length ? digits1.length : digits2.length;

  for (var i = 0; i < length; i++) {
    sumDigits[i] = (digits1[i] || 0) + (digits2[i] || 0) + (sumDigits[i] || 0);
    bigNumber.rebalanceDigitArray(sumDigits, i);
  }

  return sumDigits;
};

bigNumber.rebalanceDigitArray = function(digits, index) {
  var digit = digits[index];
  while (digit > 9) {
    digits[index] = digit % 10;

    index++;
    digits[index] = digit = (digits[index] || 0) + (digit - (digit % 10)) / 10;
  }
};
var getFirstFibTermNumberWithDigits = function(n) {
  if (n <= 1) {
    return 1;
  }

  var previous = [1];
  var current = [1];
  var counter = 2;

  while (current.length < n) {
    [current, previous] = [bigNumber.digitArrayAdd(previous, current), current];
    counter++;
  }

  console.log(counter);
};

getFirstFibTermNumberWithDigits(1000);
