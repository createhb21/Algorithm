function power(a, b) {
  // b가 1보다 작으면 1을 반환하는 endpoint를 설정
  if (b < 1) {
    return 1;
  }
  // 아래와 같은 재귀 함수가 반복되며 b가 0에 닿을 때 까지 a*(b-1)이 쌓인다.
  return a * power(a, b - 1);
}

console.log(power(2, 3)); // 8

// 2 *
// 2 *
// 2
