const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");

console.log(input);

// 세 자리 수를 문자열 형태로 처리하여, 뒤집을 수 있다.
// 예시 ) "285"가 입력으로 들어오면 "582"로 변경한 뒤에 정수 데이터로 변경한다.

let a = input[0].split("");
let b = input[1].split("");

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newB)));
