// Problem 39

// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

solutionsMaximised(1000);

function solutionsMaximised(n) {
  var max = 0,
    maxp = null;
  for (var p = 2; p <= n; p += 2) {
    var c = 0;
    for (var a = 2; a < p / 3; a++) {
      if ((p * (p - 2 * a)) % (2 * (p - a)) == 0) c++;
    }
    if (c > max) {
      max = c;
      maxp = p;
    }
  }
  console.log(`The number of solutions is maximised for the value ${maxp}`);
}
