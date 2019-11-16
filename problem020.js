// Problem 20

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

function sumFactorials(factorial) {
  var result = 1n;
  for (let i = 1; i <= factorial; i++) {
    result *= BigInt(i);
  }
  result = result.toString().split('');
  var sumResult = 0;
  for (let i = 0; i < result.length; i++) {
    sumResult += Number(result[i]);
  }
  console.log(sumResult);
}

sumFactorials(100);
