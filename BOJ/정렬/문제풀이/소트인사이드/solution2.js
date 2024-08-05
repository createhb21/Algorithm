const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 가장 먼저, 문제에서 요구하는 내용에 대한 예시를 고려해 보자.
// 총 10개의 숫자(digit)이 존재하며, 문제 해결 과정은 다음과 같다.
// 1. 0부터 9까지의 모든 숫자에 대하여, 빈도수를 센다.
// 2. 각 숫자를 내림차순으로 하나씩 확인하며, [빈도수 만큼] 출력한다.

// 입력: 9792382
// 가장 먼저, 각 숫자가 등장한 빈도 수를 계산한다.
// 0 1 2 3 4 5 6 7 8 9
// 0 0 2 1 0 0 0 1 1 2
// 출력: 9987322

let n = input[0]; // 수(N) 입력받기
// 0부터 9까지 각 숫자(digit)의 출현 빈도를 담을 배열 선언
let cnt = Array(10).fill(0);

for (let x of n) {
  cnt[Number(x)]++;
}

let answer = "";
// 9부터 0까지 하나씩 숫자를 확인하며
for (let i = 9; i >= 0; i--) {
  // 출현 빈도만큼 출력하기
  for (let j = 0; j < cnt[i]; j++) answer += i + "";
}
console.log(answer);
