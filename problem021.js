// Problem 21

// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

function sumAmicableNum(n) {
  function d(n) {
    let output = [];
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        output.push(i);
      }
    }
    if (output.length == 0) {
      return 0;
    } else {
      return output.reduce((a, b) => (a += b));
    }
  }

  let amicNums = [];

  for (let i = 1; i < n; i++) {
    let n1 = d(i);
    let n2 = d(n1);
    if (i == n2 && i !== n1 && amicNums.indexOf(i) == -1) {
      amicNums.push(i, n1);
    }
  }
  return amicNums.reduce((a, b) => (a += b));
}

sumAmicableNum(10000);
