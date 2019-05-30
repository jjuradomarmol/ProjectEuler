// Problem 3
//
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?


var givenNumber = 600851475143,
  i, j,
  factor = 0, primeFlag = false;

function seekingNumber() {
  for (i = 2; i < givenNumber; i++) {
    if (givenNumber % i == 0) {
      primeFlag = true;
      for (j = 2; j < i; j++) {
        if (i % j == 0) {
          primeFlag = false;
          break;
        }
      }
      if (primeFlag == true) {
        factor = i;
      }
    }
  }
  console.log(factor);
}

seekingNumber();
