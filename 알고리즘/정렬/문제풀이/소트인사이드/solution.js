const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 2143

let data = input[0];
let arr = [];

for (let i = 0; i < data.length; i++) {
  arr.push(Number(data[i]));
}

arr.sort((a, b) => b - a);

let answer = "";
for (let x of arr) answer += x + "";
console.log(answer);
