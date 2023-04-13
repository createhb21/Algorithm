const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 좌표 압축이란, 쉽게 말해 각 값을 크기 순위로 변경하는 것이다.
// 배열 [2, 4, -10, 4, -9]를 생각해 보자.
// 이를 순위로 표현하면 (0부터 시작) [2, 3, 0, 3, 1]로 이해할 수 있다.
// 이러한 결과를 어떻게 얻을 수 있을까 ?
// 1. 입력 배열: arr = [2, 4, -10, 4, -9];
// 2. 중복 제거를 위해 집합으로 만들기: uniqueArray = [2, 4, -10, -0];
// 3. 정렬 수행: sorted = [-10, -9, 2, 4];
// 4. Dictionary를 이용해 0부터 차례대로 매핑하기
// myMap = {
//   -10: 0,
//   -9: 1,
//   2: 2,
//   4: 3.
// }
// 5. 하나씩 매핑 값 출력하기 -> [2, 3, 0, 3, 1]

// 5
// 2 4 -10 4 -9

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// 집합(Set)으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b); // 오름차순 정렬 수행

// 0부터 차례대로 매핑(mapping) 수행
let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}

let answer = "";
for (x of arr) answer += myMap.get(x) + " ";
console.log(answer);
