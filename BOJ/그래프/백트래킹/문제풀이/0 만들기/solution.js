const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function dfs(result, depth) {
  // 현재 순열 처리 (중복 순열)
  if (depth == n - 1) {
    let str = ""; // 현재 수식 문자열
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    str += arr[n - 1] + "";
    current = eval(str.split(" ").join("")); // 공백을 제거한 뒤에 수식 계산
    if (current == 0) console.log(str); // 수식의 결과가 0이 되는 경우 출력
    return;
  }
  // 더하기, 빼기, 혹은 이어 붙이기
  for (let x of [" ", "+", "-"]) {
    result.push(x);
    dfs(result, depth + 1); // 재귀 함수 호출
    result.pop();
  }
}

let testCase = Number(input[0]);
let n = 0;
let arr = [];
// 각 테스트 케이스 처리
for (let tc = 1; tc <= testCase; tc++) {
  n = Number(input[tc]); // 자연수(N) 입력받기
  arr = [];
  for (let i = 1; i <= n; i++) arr.push(i); // 1부터 N까지의 수 삽입
  dfs([], 0);
  console.log();
}
