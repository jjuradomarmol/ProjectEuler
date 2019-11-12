// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2

// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var first = 1,
  second = 2,
  third = Math.sqrt(first * first + second * second),
  mySum = first + second + third;

function pythagoreanTriplet() {
  for (first, second; mySum <= 1000; first++) {
    while (mySum <= 1000) {
      third = Math.sqrt(first * first + second * second);
      mySum = first + second + third;
      if (mySum == 1000) {
        console.log(first, second, third);
        console.log(first * second * third);
        return;
      }
      second++;
    }
    second = first;
    third = Math.sqrt(first * first + second * second);
    mySum = first + second + third;
  }
}

pythagoreanTriplet();
