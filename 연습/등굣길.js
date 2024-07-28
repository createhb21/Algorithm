function solution(m, n, puddles) {
  // 2D 배열 초기화 (경로의 수를 저장할 배열)
  let dp = Array.from({ length: n }, () => Array(m).fill(0));

  // 시작 지점 초기화
  dp[0][0] = 1;

  // 물웅덩이를 표시
  for (let [x, y] of puddles) {
    dp[y - 1][x - 1] = -1;
  }

  // 동적 계획법을 통해 경로의 수 계산
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0; // 물웅덩이는 경로의 수를 0으로 설정
        continue;
      }
      if (i > 0) dp[i][j] += dp[i - 1][j];
      if (j > 0) dp[i][j] += dp[i][j - 1];
      dp[i][j] %= 1000000007; // 큰 수를 방지하기 위해 모듈러 연산
    }
  }

  // 도착 지점의 경로의 수 반환
  return dp[n - 1][m - 1];
}

// 테스트
const m = 4;
const n = 3;
const puddles = [[2, 2]];
console.log(solution(m, n, puddles)); // 예상 결과: 4
