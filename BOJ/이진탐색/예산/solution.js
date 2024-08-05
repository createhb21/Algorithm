const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let n = Number(input[0].split(" ")[0]); // 지방의 수
let arr = input[1].split(" ").map(Number); // 각 지방의 예산 요청
let m = Number(input[2]); // 총 예산

let start = 1; // 이진 탐색을 위한 시작점과 끝점 설정
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
// 이진 탐색 수행 (반복문)
while (start <= end) {
  console.log("result:", result);
  let mid = parseInt((start + end) / 2); // 현재의 중간점 (상한액)
  let total = 0; // 배정된 예산의 총액 계산
  for (x of arr) {
    // 각 지방에서 요청한 예산을 하나씩 확인하며
    total += Math.min(mid, x); // 예산 배정
  }
  if (total <= m) {
    // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
    result = mid;
    start = mid + 1;
  } else {
    // 조건을 만족하지 못한다면, 상한액을 감소시키기
    end = mid - 1;
  }
}
console.log("last result :", result);
