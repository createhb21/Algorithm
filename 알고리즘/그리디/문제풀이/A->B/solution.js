const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// -----------------------------------

// 55-50+40

// 뺄셈 연산자를 기준으로 나누어 여러 그룹 만들기
let groups = input[0].split("-");
console.log(groups);
let answer = 0;
for (let i = 0; i < groups.length; i++) {
  // 각 그룹 내부에서 덧셈 연산 적용
  let cur = groups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) answer += cur; // 첫 번째 그룹은 항상 덧셈(+)
  else answer -= cur; // 두 번째 그룸부터 뺄셈
}

console.log(answer);
