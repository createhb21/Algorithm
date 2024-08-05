const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 이 문제는 JavaScript에서 제공하는 sort() 메서드를 이용해 해결할 수 있다.
// 단순히 N개의 수가 입력받아, 이를 오름차순 정렬한 결과를 반환할 수 있다.
// N의 값이 최대 1,000이므로, 시간 복잡도 O(N^2)의 알고리즘을 사용할 수도 있다.

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  // 한 줄씩 입력받아 배열에 넣기
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);
