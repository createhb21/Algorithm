// 최댓값
let arr = ["1", "35", "532", "53", "12", "456", "78", "12", "45"];

let maxIdx = 0;
let maxVal = 0;

for (let i = 0; i < 9; i++) {
  let data = Number(arr[i]);
  if (maxVal < data) {
    maxVal = data;
    maxIdx = i;
  }
}
console.log(maxVal);
console.log(maxIdx + 1);

let otherData = arr.map((x) => Number(x));
let max = Math.max(...otherData);
console.log(max);
console.log(otherData.indexOf(max) + 1);

// ------------------------------------------------------------------------

// 나머지
// 각 원소를 하나씩 확인하며, 42로 나눈 나머지를 차례대로 출력한다.
// 원소를 하나씩 확인한다는 점에서 시간 복잡도는 O(N)이다.

// 현재 출력할 값: 105 % 42 = 21
// 나머지 값들: [21]
// 집합: {21}
// ...

let testArr = ["105", "88", "92", "215", "77", "193", "302"];
let data = testArr.map(Number);
let mySet = new Set(); // 집합 객체 생성

// 원소 하나씩 확인
for (let i = 0; i < data.length; i++) {
  mySet.add(data[i] % 42);
}

// 집합에 포함된 원소의 개수 출력
console.log(mySet.size);

// ------------------------------------------------------------------------

// 평균은 넘겠지
// 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

// 먼저 N개의 원소에 대한 평균 값을 계산한다. O(N)
// 다시 N개의 원소를 하나씩 확인하여 평균 이상인지 확인한다. O(N)
// - 전체 시간 복잡도는 O(N)이다.

let strInput = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`;
// 계산된 평균 값: 52.143
// 평균 이상인 값들: [71, 59, 82, 68];
// 따라서, 평균을 넘는 학생의 비율은 4/7 = 57.143%이다.

let input = strInput.toString().split("\n");
console.log(input);

let testCases = Number(input[0]);
for (let t = 1; t <= testCases; t++) {
  // 각각의 테스트 케이스를 확인
  let data = input[t].split(" ").map(Number);
  let n = data[0]; // 첫 번째 수는 데이터의 개수
  let summary = 0; // n개의 점수에 대해서 평균 계산
  for (let i = 1; i <= n; i++) {
    summary += data[i];
  }
  let average = summary / n;
  let cnt = 0; // 점수가 평균을 넘는 학생 수 계산
  for (let i = 1; i <= n; i++) {
    if (data[i] > average) cnt += 1;
    // 점수가 평균을 넘는 학생의 비율을 소수점 아래 셋째 자리까지 출력
    console.log(`${((cnt / n) * 100).toFixed(3)}%`);
  }
}

// ------------------------------------------------------------------------

// 평균
