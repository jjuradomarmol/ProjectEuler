// Problem 14

// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

var maxCounter = 0,
  counter = 1,
  maxNumber = 0;

function collatzSequence() {
  for (let i = 1; i <= 1000000; i++) {
    counter = 1;
    for (j = i; j > 1; ) {
      if (j % 2 == 0) {
        j = j / 2;
      } else {
        j = j * 3 + 1;
      }
      counter++;
    }
    if (counter > maxCounter) {
      maxCounter = counter;
      maxNumber = i;
    }
  }
  console.log(maxNumber);
}

collatzSequence();
