const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 첫 번째 줄: 상근이가 가지고 있는 숫자 카드의 개수 N
const N = parseInt(input[0], 10);

// 두 번째 줄: 상근이가 가지고 있는 숫자 카드의 숫자들
const cards = input[1].split(" ").map(Number);

// 세 번째 줄: 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 숫자
const M = parseInt(input[2], 10);

// 네 번째 줄: 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 숫자들
const queries = input[3].split(" ").map(Number);

// 숫자 카드의 개수를 세기 위한 해시맵
const cardCount = new Map();

// 카드 개수 세기
for (const card of cards) {
  if (cardCount.has(card)) {
    cardCount.set(card, cardCount.get(card) + 1);
  } else {
    cardCount.set(card, 1);
  }
}

// 결과 배열 초기화
const results = [];

// 각 쿼리에 대해 카드 개수 찾기
for (const query of queries) {
  if (cardCount.has(query)) {
    results.push(cardCount.get(query));
  } else {
    results.push(0);
  }
}

// 결과 출력
console.log(results.join(" "));
