const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 이 문제는 JavaScript에서 제공하는 sort() 메서드를 이용해 해결할 수 있다.
// JavaScript의 경우 원하는 기준에 따라서 객체에 대한 정렬을 수행하는 기능을 제공한다.
// 단순히 세 개의 수가 주어지므로, 이를 배열에 담아 정렬(sorting)을 수행한다.

let arr = input[0].split(" ").map(Number);
// 오름차순 정렬 수행
arr.sort((a, b) => a - b);

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " ";
}
console.log(answer);
