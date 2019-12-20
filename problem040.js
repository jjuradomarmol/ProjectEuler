// Problem 40

// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If dn represents the nth digit of the fractional part, find the value of the following expression.

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

findValue();

function findValue() {
  var res = 1;
  for (var i = 0; i < 7; i++) {
    res *= getDigit(10 ** i);
  }
  console.log(`The value of the expression is ${res}`);
}

function getDigit(n) {
  var r,
    s = 0,
    k = 0;
  while (s < n) {
    r = s;
    s += 9 * 10 ** k++ * k;
  }
  var h = n - r - 1;
  var t = 10 ** (k - 1) + h / k;
  var p = h % k;
  return +String(t)[p];
}
