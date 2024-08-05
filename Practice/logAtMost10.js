function logAtMost10(n) {
  // 이 경우 0~9까지는 다른 값들이 출력되는데 10부터는 계속 1~10이 출력된다.
  // 따라서 무한대를 가정하면 이 시간복잡도는 O(1)이 된다.
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

console.log(logAtMost10(33));
