// Problem 27

// Euler discovered the remarkable quadratic formula:

// n2+n+41

// It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39
// . However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41

// is clearly divisible by 41.

// The incredible formula n2−79n+1601
// was discovered, which produces 80 primes for the consecutive values 0≤n≤79

// . The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

//     n2+an+b

// , where |a|<1000 and |b|≤1000

// where |n|
// is the modulus/absolute value of n
// e.g. |11|=11 and |−4|=4

// Find the product of the coefficients, a
// and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.

getProductCoefficients(1000);

function getProductCoefficients(maxToTest) {
  var maxA = 0;
  var maxB = 0;
  var maxNumPrimes = 0;
  for (var b = -maxToTest; b <= maxToTest; b++) {
    if (isPrime(b)) {
      for (var a = -maxToTest; a <= maxToTest; a++) {
        var numPrimes = getNumberOfPrimes(a, b);
        if (numPrimes > maxNumPrimes) {
          [maxA, maxB, maxNumPrimes] = [a, b, numPrimes];
        }
      }
    }
  }
  console.log(`The product of the coefficients is ${maxA * maxB}`);
}

function getFactors(number) {
  var factors = [];

  var possibleFactor = 1;
  var sqrt = Math.sqrt(number);
  while (possibleFactor <= sqrt) {
    if (number % possibleFactor == 0) {
      factors[factors.length] = possibleFactor;

      var otherPossibleFactor = number / possibleFactor;
      if (otherPossibleFactor > possibleFactor) {
        factors[factors.length] = otherPossibleFactor;
      }
    }
    possibleFactor++;
  }

  return factors;
}

function isPrime(num) {
  num = num > 0 ? num : num * -1;
  return getFactors(num).length <= 2;
}

function getNumberOfPrimes(a, b) {
  var n = 0;
  while (isPrime(n * n + a * n + b)) {
    n++;
  }

  return n;
}
