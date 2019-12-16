// Problem 33

// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

getValueDenominator();

function getValueDenominator() {
  var dp = 1;
  var np = 1;

  for (var c = 1; c <= 9; c++) {
    for (var d = 1; d < c; d++) {
      for (var n = 1; n < d; n++) {
        if ((n * 10 + c) * d === (c * 10 + d) * n) {
          np *= n;
          dp *= d;
        }
      }
    }
  }
  var valueDenominator = dp / gcd(np, dp);
  console.log(
    `The value of the denominator if the product of these four fractions is given in its lowest common terms is ${valueDenominator}`
  );
}

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
