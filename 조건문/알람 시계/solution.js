// 첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.
// 입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

// 현재 시각이 주어졌을 때, 45분을 감소시킨다.
// 0분보다 작아지면, 시(hour)가 1시간 감소한다.
// 0시보다 작아지면, 시(hour)가 23시로 초기화된다.
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let hour = +input[0].split(" ")[0];
let min = +input[0].split(" ")[1];

solution(hour, min);
function solution(hour, min) {
  let Hour = hour;
  let minute = min - 45;

  if (minute < 0) {
    minute += 60;
    Hour--;
    if (Hour === -1) {
      Hour = 23;
    }
  }
  console.log(Hour, minute);
}
