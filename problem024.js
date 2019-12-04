// Problem 24

// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getNthLexicographicPermutation(sortedAvailableDigits, n) {
  var length = sortedAvailableDigits.length;
  if (length == 1) {
    return n == 1 ? sortedAvailableDigits[0] : null;
  }

  var combinationsWithoutFirstDigit = 1;
  for (var i = 2; i < length; i++) {
    combinationsWithoutFirstDigit *= i;
  }

  var firstDigitIndex = Math.floor((n - 1) / combinationsWithoutFirstDigit);
  if (firstDigitIndex >= length) {
    return null;
  }
  return (
    sortedAvailableDigits.splice(firstDigitIndex, 1) +
    getNthLexicographicPermutation(
      sortedAvailableDigits,
      n - firstDigitIndex * combinationsWithoutFirstDigit
    )
  );
}

console.log(getNthLexicographicPermutation(digits, 1000000));
