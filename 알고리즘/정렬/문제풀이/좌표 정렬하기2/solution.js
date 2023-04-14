const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 이 문제는 JavaScript에서 제공하는 sort() 메서드를 이용해 해결할 수 있다.
// JavaScript의 경우 원하는 기준에 따라서 객체에 대한 정렬을 수행하는 기능을 제공한다.
// 본 문제에서 정렬한 데이터는 함 점 (x,y)으로 객체 형태다.
// 이때, 다음의 기준에 따라서 정렬을 수행한다.
// 1. 기본적으로 y 좌표가 증가하는 순으로 정렬한다.
// 2. 만약에 y 좌표가 같으면 x 좌표가 증가하는 순으로 정렬한다.

// 5
// 0 4
// 1 2
// 1 -1
// 2 2
// 3 3

let n = Number(input[0]);
let data = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  data.push([x, y]);
}

function compare(a, b) {
  if (a[1] != b[1]) return a[1] - b[1]; // x 좌표 기준 오름차순
  else return a[0] - b[0]; // x가 같으면 y 좌표 기준 오름차순
}

data.sort(compare); // 정렬 수행

let answer = ""; // 정렬 결과 출력
for (let point of data) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);
