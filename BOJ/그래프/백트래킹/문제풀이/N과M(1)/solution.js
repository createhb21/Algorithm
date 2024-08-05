const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 모든 수열을 계산한다.
// 모든 순열의 수를 고려하기 위해 재귀 함수(백트래킹)를 사용할 수 있다.
// 하나의 순열을 트리에서 리프 노드까지의 경로로 생각할 수 있다.
// -> 이때, M개의 원소를 뽑는 순열을 고려하는 것이므로, 깊이(depth)는 M과 같다.
// 원소를 중복하여 선택하지 않으므로, 방문 처리(visiterd) 배열을 사용한다.
// -> 한 번 선택된 원소는 다음 재귀 함수에서 다시 선택되지 않는다.

// 1 2
// 1 3
// 1 4
// 2 1
// 2 3
// 2 4
// 3 1
// 3 2
// 3 4
// 4 1
// 4 2
// 4 3

let [n, m] = input[0].split(" ").map(Number); // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
let arr = []; // 순열을 계산하고자 하는 원소가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false); // 각 원소 인덱스별 방문 여부
let selected = []; // 현재 순열에 포함된 원소

let answer = "";
function dfs(arr, depth) {
  if (depth == m) {
    // 모든 순열을 확인하는 부분
    let result = []; // 순열 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 순열을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    // 하나씩 원소 인덱스를 확인하며
    if (visited[i]) continue; // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1); // 재귀 함수 호출
    selected.pop(); // 현재 원소 선택 취소
    visited[i] = false; // 현재 원소 방문 처리 취소
  }
}
dfs(arr, 0);
console.log(answer);
