// Problem 2
//
// Each new term in the Fibonacci sequence is generated by adding
// the previous two terms. By starting with 1 and 2, the first 10 terms
// will be:
//    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values
// do not exceed four million, find the sum of the even-valued terms.


var one = 1,
  two = 2,
  temp,
  sumEven = 0;

while (two < 4000000) {
  if (two % 2 == 0) {
    sumEven += two;
  };
  temp = one;
  one = two;
  two += temp;
};
console.log(sumEven);
