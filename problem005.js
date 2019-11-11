// Problem 5
//
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function seekingNumber() {
  for (let i = 20; ; i += 20) {
    if (
      i % 20 == 0 &&
      i % 19 == 0 &&
      i % 18 == 0 &&
      i % 17 == 0 &&
      i % 16 == 0 &&
      i % 15 == 0 &&
      i % 14 == 0 &&
      i % 13 == 0 &&
      i % 12 == 0 &&
      i % 11 == 0
    ) {
      console.log(i);
      return;
    }
  }
  return;
}
seekingNumber();
