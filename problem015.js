var pascalTriangle = [],
  vertices = 0,
  sides = 0;

function routes(sides) {
  vertices = ++sides;

  // Generating Pascal triangle
  for (let i = 0; i < vertices; i++) {
    pascalTriangle[i] = new Array(vertices);
  }
  for (let j = 0, k = 0; j < vertices; j++, k++) {
    pascalTriangle[j][0] = 1;
    pascalTriangle[0][k] = 1;
  }
  for (let i = 1; i < vertices; i++) {
    for (let j = 1; j < vertices; j++) {
      pascalTriangle[i][j] =
        pascalTriangle[i - 1][j] + pascalTriangle[i][j - 1];
    }
  }

  console.log(pascalTriangle[vertices - 1][vertices - 1]);
}

routes(20);
