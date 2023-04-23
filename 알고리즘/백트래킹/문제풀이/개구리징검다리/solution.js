function solution(stones) {
  const n = stones.length;
  const dp = new Array(n).fill(0); // 최소 점프 횟수를 저장할 배열, 초기값은 0으로 설정
  dp[0] = 1; // 첫 번째 징검다리의 최소 점프 횟수는 1

  for (let i = 0; i < n; i++) {
    if (dp[i] === 0) continue; // 현재 징검다리에 도달할 수 없는 경우 스킵

    for (let j = 1; j <= stones[i]; j++) {
      if (i + j >= n) break; // 배열의 범위를 넘어가는 경우 스킵

      if (dp[i + j] === 0 || dp[i + j] > dp[i] + 1) {
        dp[i + j] = dp[i] + 1; // 현재 징검다리에서 j만큼 점프한 경우의 최소 점프 횟수 갱신
      }
    }
  }

  return dp[n - 1] === 0 ? -1 : dp[n - 1]; // 마지막 징검다리의 최소 점프 횟수 반환, 도달할 수 없는 경우 -1 반환
}

console.log(solution([4, 1, 2, 3, 1, 0, 5]));
