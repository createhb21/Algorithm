const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 입력이 들어왔을 때, 일종의 객체로 이를 처리한다.
// Stable sort

// 3
// 21 Junkyu
// 21 Dohyun
// 20 Sunyoung

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  // 각 사람의 (나이, 이름) 정보를 입력받기
  let [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}

arr.sort((a, b) => a[0] - b[0]); // Node.js의 정렬은 기본적으로 stable

let answer = "";
for (let x of arr) answer += x[0] + " " + x[1] + "\n";
console.log(answer);
