const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number); // 1부터 N까지 자연수 중에서 M개를 고른 중복 수열
let arr = []; // 중복 순열을 계산하고자 하는 원소가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let selected = []; // 현재 중복 순열에 포함된 원소

let answer = "";
function dfs(arr, depth, start) {
  if (depth == m) {
    // 모든 중복 순열을 확인하는 부분
    let result = []; // 중복 순열 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 중복 순열을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  // 하나씩 원소 인덱스를 확인하며
  for (let i = start; i < arr.length; i++) {
    selected.push(i); // 현재 원소 선택
    dfs(arr, depth + 1, i); // 재귀 함수 호출
    selected.pop(); // 현재 원소 선택 취소
  }
}
dfs(arr, 0, 0);
console.log(answer);
