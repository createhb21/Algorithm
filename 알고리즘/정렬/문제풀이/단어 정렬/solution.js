const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 이 문제는 JavaScript에서 제공하는 sort() 메서드를 이용해 해결할 수 있다.
// 본 문제에서는 문자열의 중복을 허용하지 않으므로, 집합(Set) 자료형을 사용할 수 있다.
// 데이터의 개수(N)가 최대 20,000이르모, 시간 복잡도 O(NlogN)의 정렬 알고리즘을 사용한다.
// 정렬 기준 함수를 작성하여 다음의 조건에 따라 정렬을 수행한다.
// 1. 길이가 짧은 것부터
// 2. 길이가 같으면 사전 순으로

// 13
// but
// i
// wont
// hesitate
// no
// more
// no
// more
// it
// cannot
// wait
// im
// yours

const N = input.shift();
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log([...new Set(sorted)].join("\n"));
