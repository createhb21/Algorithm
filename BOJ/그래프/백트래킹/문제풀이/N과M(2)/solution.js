const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number); // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 조합
let arr = []; // 조합을 계산하고자 하는 원소가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false); // 각 원소 인덱스별 방문 여부
let selected = []; // 현재 조합에 포함된 원소

let answer = "";
function dfs(arr, depth, start) {
  if (depth == m) {
    // 모든 순열을 확인하는 부분
    let result = []; // 조합 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 조합을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    // start 지점부터 하나씩 원소 인덱스를 확인하며
    if (visited[i]) continue; // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1, i + 1); // 조합이므로, 재귀 함수 호출시 다음 인덱스를 넣기
    selected.pop(); // 현재 원소 선택 취소
    visited[i] = false; // 현재 원소 방문 처리 취소
  }
}
dfs(arr, 0, 0);
console.log(answer);
