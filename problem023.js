// Problem 23

// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

var abundantNumbersArray = [],
  sumsNumbersArray = [],
  noAbundantSums = [],
  totalSum = 0;

function generatingAbundantNumbers() {
  var divisorsNumber = 0;
  for (let i = 12; i < 28123; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        divisorsNumber += j;
      }
    }
    if (divisorsNumber > i) {
      abundantNumbersArray.push(i);
    }
    divisorsNumber = 0;
  }
  return abundantNumbersArray;
}

function searchingAllSums() {
  var tempNumber = 0;
  for (let i = 0; i < abundantNumbersArray.length - 1; i++) {
    for (let j = i; j < abundantNumbersArray.length; j++) {
      tempNumber = abundantNumbersArray[i] + abundantNumbersArray[j];
      sumsNumbersArray.push(tempNumber);
    }
  }
  return sumsNumbersArray;
}

function searchingAllNoSums() {
  var totalSum = 0;
  for (let i = 0; i < 28123; i++) {
    if (sumsNumbersArray.indexOf(i) === -1) {
      totalSum += i;
    }
  }
  console.log(totalSum);
}

function searchingNoSums() {
  generatingAbundantNumbers();
  searchingAllSums();
  searchingAllNoSums();
}

searchingNoSums();
