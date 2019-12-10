// Problem 30

// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

//     1634 = 14 + 64 + 34 + 44
//     8208 = 84 + 24 + 04 + 84
//     9474 = 94 + 44 + 74 + 44

// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

getPowerNums(5);

function getPowerNums(power) {
  var powerNums = [];

  var minNum = Math.pow(2, power);
  var maxNum = Math.pow(9, power) * (power + 1);

  for (var i = minNum; i < maxNum; i++) {
    var num = createFromNumber(i);
    var sum = 0;

    for (var j = 0; j < num.length; j++) {
      sum += Math.pow(num[j], power);
    }

    if (sum == i) {
      powerNums.push(i);
    }
  }

  var powerSum = 0;
  for (var i = 0, powerNum; (powerNum = powerNums[i]); i++) {
    powerSum += powerNum;
  }
  console.log(
    `The sum of all the numbers that can be written as the sum of ${power}th powers of their digits is ${powerSum}`
  );
}

function createFromNumber(number) {
  var bigNum = [number];
  rebalanceDigitArray(bigNum);
  return bigNum;
}

function rebalanceDigitArray(digits, index) {
  index = index || 0;
  var digit = digits[index];
  while (digit > 9) {
    digits[index] = digit % 10;

    index++;
    digits[index] = digit = (digits[index] || 0) + (digit - (digit % 10)) / 10;
  }
}
