let arr = [10, 2, 3, 22, 33, 100, 11];
let arrTwo = [12, 13];

// stack
const stack = "last-in-first-out";

console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.push(1000));
console.log(arr);

// queue
const queue = "last-out-first-in";
console.log(arr);
console.log(arr.push(1000));
console.log(arr);
console.log(arr.shift());
console.log(arr);

// 관련하여 알면 좋은 메서드 : unshift() -> 값을 앞에서 넣습니다.
console.log("-------");
console.log(arr.length);
console.log(arrTwo.fill(100));
console.log(arrTwo);
console.log(arrTwo.filter((x) => x > 30));
// arrTwo 원소들이 문자였다면
// console.log(arrTwo.filter((x) => x.length > 10));

let arrThree = [1, 2, 3, [1, 2, 3, [10, 20]]];

console.log(arrThree.flat());
console.log(arrThree.flat(2));
console.log(arr.includes(10));
console.log(arr.join("!"));
console.log(arr.join("-"));

function caclculate(x) {
  return parseInt(x);
}
console.log(["1", "2", "3"].map(caclculate));
console.log(["1", "2", "3"].map((x) => parseInt(x)));

console.log("-----------");

console.log(arr.sort());
console.log(arr.reverse());
console.log(arr.splice(2, 1, "hello")); // 요소를 삭제하거나 교체합니다.
console.log(arr);
console.log(arr.slice(3, 6)); // 요소를 인덱스 기준으로 잘라냅니다.
console.log(arr);
console.log("---------");

arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5];
let s = new Set(arr);
console.log(s); // {1, 2, 3, 4, 5}
console.log(s.size); // 5
console.log(s.length); // undefined
console.log(s.has(5));
console.log("-------");

let m = new Map();
m.set("하나", "one");
m.set("둘", "two");
m.set("셋", "three");
console.log(m); // { '하나' => 'one', '둘' => 'two', '셋' => 'three' }
console.log(m.has("하나")); // true
console.log(m.get("하나")); // one
for (let [key, value] of m) {
  console.log(key);
  console.log(value);
}
for (let item of m) {
  console.log(item);
}

console.log("-------");
let str = "abc abc de de abcde defg ABC";
let str2 = "abc abc de de abcde \n defg";
// 이스케이프 시퀀스
// 예약 혹은 특수 문자를 출력하기 위하여 이스케이프 시퀀스를 사용할 수 있다.
// \n \t \v \' \"" \\
// \t => 탭
// \\ => 역 슬래시
// \" => 큰 따옴표
// \' => 작은 따옴표
console.log(str);
console.log(str2);

console.log(str.concat(str2));
console.log(str);
console.log(str.includes("abc"));
console.log(str.split());
console.log(str.split(" "));
console.log(str.replace("abc", "!"));
console.log(str.replace(/abc/g, "!"));
console.log(str.replace(/ /g, "-"));
console.log(str.slice(3, 6));
console.log(str.indexOf("abcde"));
console.log(str.slice(14, 20));
console.log(str.length);
let re = /abc/i;
let re2 = /abc/gi;
console.log(str.match(re));
console.log(str.match(re2));

console.log("----------------------------");

// 실수를 출력할 때 소수점 아래 특정 자리에서 반올림할 수 있다.
// 특정 실수에 대하여 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
let x = 123.456;
console.log(x.toFixed(2));

console.log("----------------------------");

let input = `472 
385`;

let input2 = input.toString().split("\n");

let a = input2[0];
let b = input2[1];

let x_1 = b[2];
let x_2 = b[1];
let x_3 = b[0];

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_2));
console.log(Number(a) * Number(x_3));
console.log(Number(a) * Number(b));

console.log("----------------------------");

let n = 5;

let result = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

console.log("----------------------------");
// 빠른 A + B
// 빠르게 출력하기 위해 하나의 문자열 변수에 정보를 담은 뒤에 한꺼번에 문자열을 출력한다.
// 한 줄(line)을 출력할 때마다 console.log()를 수행하면 많은 시간이 소요된다.
// 따라서 모든 줄에 대한 정보를 하나의 문자열에 담았다가 한꺼번에 출력한다.

let inputText = `5
1 1
12 34
5 500
40 60
1000 1000`;

let data = inputText.toString().split("\n");

let testCase = Number(data[0]);
let answer = "";

for (let t = 1; t <= testCase; t++) {
  let numberArr = data[t].split(" ");
  let a = Number(numberArr[0]);
  let b = Number(numberArr[1]);
  answer += a + b + "\n";
}

console.log(answer);
