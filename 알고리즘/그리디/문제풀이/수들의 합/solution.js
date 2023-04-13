const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 서로 다른 N개의 자연수의 합이 S다.
// [문제의 요구사항] S를 알 때, 자연수 N의 최댓값은 얼마일까 ?

// [문제 해결 아이디어]: 가능한 작은 수부터 더하는 것이 좋다.
// 예를 들어, S = 200일 때, 1부터 시작하여 차례대로 더하면서, 합이 S를 넘어가지 않도록 한다.

// -----------------------------------

// 200
let s = Number(input[0]);
let sum = 0;
let current = 0;

while (sum <= s) {
  current += 1;
  sum += current;
}
console.log(current - 1);
