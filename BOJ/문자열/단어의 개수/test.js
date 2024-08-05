const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let data = input[0].trim().split(" ");

if (data == "") {
  console.log(0);
} else {
  console.log(data.length);
}
