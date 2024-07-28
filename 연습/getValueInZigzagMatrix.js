function getValueInZigzagMatrix(n, r, c) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1,
    row = 0,
    col = 0;
  let direction = 1;

  while (num <= n * n) {
    matrix[row][col] = num;
    num++;

    let newRow = row + (direction === 1 ? -1 : 1);
    let newCol = col + (direction === 1 ? 1 : -1);

    if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n) {
      if (direction === 1) {
        if (col + 1 < n) {
          col++;
        } else {
          row++;
        }
      } else {
        if (row + 1 < n) {
          row++;
        } else {
          col++;
        }
      }
      direction *= -1;
    } else {
      row = newRow;
      col = newCol;
    }
  }

  return matrix[r - 1][c - 1];
  // return matrix;
}

console.log(getValueInZigzagMatrix(5, 3, 2));
console.log(getValueInZigzagMatrix(6, 5, 4));
