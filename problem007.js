// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

var counter = 0,
  primeFlag = false,
  i,
  j;

function seekingPrimeNumber() {
  for (i = 2; counter < 10001; i++) {
    primeFlag = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        primeFlag = false;
        break;
      }
    }
    if (primeFlag) {
      counter++;
    }
  }
  console.log(i - 1);
}

seekingPrimeNumber();
