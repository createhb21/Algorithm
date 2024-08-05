const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// ------------------------------------------------

// 4 11
// 802
// 743
// 457
// 539

// ------------------------------------------------

let k = Number(input[0].split(" ")[0]); // 가지고 있는 랜선의 개수
let n = Number(input[0].split(" ")[1]); // 필요한 랜선의 개수

let arr = []; // 각 랜선의 길이
for (let i = 1; i <= k; i++) arr.push(Number(input[i]));

let start = 1; // 이진 탐색을 위한 시작점과 끝점 설정
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0; // mid로 잘랐을 때 얻을 수 있는 나무의 양 계산
  for (x of arr) {
    total += parseInt(x / mid);
  }
  if (total < n) {
    // 만들 수 있는 랜선의 개수가 부족한 경우 길이 줄이기
    end = mid - 1;
  } else {
    // 만들 수 있는 랜선의 개수가 충분한 경우 길이 늘리기
    result = mid; // 최대 길이를 찾아야 하므로, result에 기록
    start = mid + 1;
  }
}
console.log(result);
