// Problem 36

// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)

solution(1000000);

function solution(limit) {
  var sum = 0;

  for (var parity = 0; parity < 2; parity++) {
    var p = generatePalindrome(1, parity);
    for (var i = 2; p < limit; i++) {
      if (isPalindrome(p, 10)) {
        sum += p;
      }
      p = generatePalindrome(i, parity);
    }
  }
  console.log(
    `The sum of all numbers, less than one million, which are palindromic in base 10 and base 2 is ${sum}`
  );
}

function generatePalindrome(x, oddPalindrome) {
  var res = x;
  x >>= oddPalindrome;
  while (x > 0) {
    res = (res << 1) | (x & 1);
    x >>= 1;
  }
  return res;
}

function isPalindrome(x, base) {
  var s = x.toString(base);
  var a = s.length - 1;
  var b = 0;

  while (b < a) {
    if (s[a] !== s[b]) {
      return false;
    }
    b++;
    a--;
  }
  return true;
}
