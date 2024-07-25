function logUpTo(n) {
  // 이 경우 n값이 아무리 증가해도 메모리 공간은 "i=" 한 자리만 변화하며 필요하기 때문에
  // 이 알고리즘의 공간 복잡도는 O(1)이다.
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

console.log(logUpTo(7));
