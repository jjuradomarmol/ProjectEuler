// A palindromic number reads the same both ways. The largest
// palindrome made from the product of two 2-digit numbers
// is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two
// 3-digit numbers.


var i,
  j,
  temp, foundNumb, arr = [];

function palindrome(str) {
  return str.toString() == str.toString().split('').reverse().join('');
}

function foundNumber() {
  for (i = 900; i < 1000; i++) {
    for (j = 900; j < 1000; j++) {
      temp = j * i;
      if (palindrome(temp)) {
        foundNumb = temp;
      }
    }
  }
  console.log(foundNumb);
}
foundNumber();
