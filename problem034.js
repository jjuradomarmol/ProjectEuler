// Problem 34

// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

var Factorials = [1];

sumFactorialsDigits();

function sumFactorialsDigits() {
  precalculatingFactors();
  var sum = 0;
  for (var i = 10; i <= 1499999; i++) {
    if (i === factorialSum(i)) {
      sum += i;
    }
  }
  console.log(
    `The sum of all numbers which are equal to the sum of the factorial of their digits is ${sum}`
  );
}

function precalculatingFactors() {
  for (var i = 1; i < 10; i++) Factorials[i] = Factorials[i - 1] * i;
  return Factorials;
}

function factorialSum(n) {
  var sum = 0;
  while (n > 0) {
    sum += Factorials[n % 10];
    n = (n / 10) | 0;
  }
  return sum;
}
