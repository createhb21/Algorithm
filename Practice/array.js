const arr1 = Array(100).fill(0);
const arr2 = Array(10)
  .fill()
  .map((_, index) => index + 1);
const arr3 = Array(10)
  .fill()
  .map((_, index) => index + 1)
  .filter((x) => x % 2 === 0);
const arr4 = Array(10)
  .fill()
  .map((_, index) => index + 1)
  .filter((x) => x % 2 === 0)
  .reduce((acc, x) => acc + x, 0);
const arr5 = "0"
  .repeat(10)
  .split("")
  .map((x) => parseInt(x));
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

console.log("---------------");

let data = [5, 2, 9, 8, 4];

// minValue
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); // 2

let summary = data.reduce((a, b) => a + b);
console.log(summary); // 28

// 배열 초기화
// 직접 값을 설정하여 초기화
let arr = [1, 2, 35, 4, 5];
// 길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arrrr = new Array(5).fill(0);

// --------------------------------

// 집합 자료형
// 특정한 원소의 등장 여부를 파악할 때 집합 자료형을 효과적으로 사용할 수 있다.
let mySet = new Set();
// 여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log("원소의 개수", mySet.size); // 3
console.log("원소 7을 포함하고 있는가?", mySet.has(7)); // true

// 원소 5 제거
mySet.delete(5);
// 원소를 하나씩 출력
for (let item of mySet) console.log(item);
