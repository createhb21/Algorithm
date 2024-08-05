const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");

let a = input[0].split("");
let b = input[1].split("");

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newB)));
