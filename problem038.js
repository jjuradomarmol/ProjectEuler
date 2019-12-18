// Problem 38

// Take the number 192 and multiply it by each of 1, 2, and 3:

//     192 × 1 = 192
//     192 × 2 = 384
//     192 × 3 = 576

// By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

getPandigital();

function getPandigital() {
  for (let x = 9487; x >= 9234; x--) {
    let res = 100002 * x;
    if (isPandigital(res)) {
      console.log(
        `The largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product is ${res}`
      );
      return res;
    }
  }
  return null;
}

function isPandigital(n) {
  var m = 0;

  for (var i = 0; n > 0; i++) {
    m |= 1 << n % 10;
    n = (n / 10) | 0;
  }
  return 2 + m === 1 << (i + 1);
}
