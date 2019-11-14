// Problem 16

// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?

function sumPowerNumber(base, exponent) {
  var theNumber = BigInt(Math.pow(base, exponent));
  var tempSum = theNumber.toString().split('');
  var sum = 0;
  for (let i = 0; i < tempSum.length; i++) {
    sum += Number(tempSum[i]);
  }
  console.log(sum);
}

sumPowerNumber(2, 1000);
