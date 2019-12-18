// Problem 37

// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

var data, SIEVE;

sumTruncatablePrimes();

function sumTruncatablePrimes() {
  var sum = 0;
  var num = 0;
  SIEVE = sieve(2e6 - 1);
  for (var i = 23; num < 11; i += 2) {
    if (isPrime(i) && isTruncatable(i)) {
      num++;
      sum += i;
    }
  }
  console.log(
    `The sum of the eleven primes that are both truncatable from left to right and right to left is ${sum}`
  );
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
function isPrime(n) {
  return SIEVE[n] === 0;
}

function isTruncatable(p) {
  for (var div = 10; div < p; div *= 10) {
    if (!isPrime(p % div) || !isPrime((p / div) | 0)) {
      return false;
    }
  }
  return true;
}
