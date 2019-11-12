// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

var i,
  j,
  primeFlag = false,
  sum = 2;

function sumPrimes() {
  for (i = 2; i < 2000000; i++) {
    for (j = 2; j < i; j++) {
      primeFlag = true;
      if (i % j == 0) {
        primeFlag = false;
        break;
      }
    }
    if (primeFlag) {
      sum += i;
    }
  }
  console.log(sum);
}

sumPrimes();
