function solution(n, k) {
  let count = 0; // 배치한 룩의 개수를 저장하는 변수
  let visited = Array(n).fill(false); // 각 행의 룩 배치 여부를 저장하는 배열

  // 체스판을 탐색하며 룩을 배치하는 함수
  function backtracking(row, col, rooks) {
    // 체스판의 끝에 도달하면 배치한 룩의 개수가 k와 일치하는지 확인하고, 일치하면 경우의 수를 증가시킴
    if (row === n) {
      if (rooks === k) {
        count++;
      }
      return;
    }

    // 현재 행의 모든 열에 대해 룩을 배치하지 않은 경우와 배치한 경우로 나누어 재귀적으로 호출
    for (let c = 0; c < n; c++) {
      if (!visited[c]) {
        // 해당 열에 룩이 배치되지 않은 경우에만 배치 가능
        visited[c] = true; // 해당 열에 룩 배치 표시
        backtracking(row + 1, col + 1, rooks + 1); // 다음 행으로 이동하고 룩 개수 증가
        visited[c] = false; // 해당 열에 배치된 룩 표시 제거
      }
    }

    // 현재 위치에 룩을 배치하지 않고 다음 행으로 이동
    backtracking(row + 1, col, rooks);
  }

  // 첫 번째 행의 첫 번째 칸부터 시작하여 백트래킹 함수 호출
  backtracking(0, 0, 0);

  // 경우의 수를 10007로 나눈 나머지를 반환
  return count % 10007;
}

const result = solution(3, 2);
console.log(result);
