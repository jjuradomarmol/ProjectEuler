// Problem 35

// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

var NOT_PRIME, data;

getCircularPrimes(1000000);

function getCircularPrimes(limit) {
  // Below 100
  var num = 13;

  NOT_PRIME = sieve(limit);

  for (var i = 101; i < limit; i += 2) {
    if (!NOT_PRIME[i] && allRotationsPrime(i)) num++;
  }
  console.log(`There are ${num} circular primes below one million`);
}
function sieve(n) {
  data = new Uint8Array(n + 1);
  data[0] = 1;
  data[1] = 1;
  var bound = Math.floor(Math.sqrt(n));

  for (var i = 4; i <= n; i += 2) {
    data[i] = 1;
  }

  for (var i = 3; i <= bound; i += 2) {
    if (data[i] === 0) {
      for (var j = i * i; j <= n; j += i + i) {
        data[j] = 1;
      }
    }
  }
  return data;
}
function allRotationsPrime(n) {
  var l = Math.floor(Math.log10(n)) + 1;
  var p = Math.pow(10, l) - 1;

  for (var i = 1; i < l; i++) {
    n = (n + (n % 10) * p) / 10;
    if (NOT_PRIME[n]) {
      return false;
    }
  }
  return true;
}
