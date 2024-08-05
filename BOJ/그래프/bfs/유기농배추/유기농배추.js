/**
문제 풀이 단계
  1. 입력 데이터 분석
    - 첫 줄에는 테스트 케이스의 수가 주어진다.
    - 각 테스트 케이스마다 농장의 가로(M), 세로(N) 크기와 배추가 심어진 위치의 개수(K)가 주어진다.
    - 이후 K줄에 걸쳐 배추가 심어진 위치가 주어진다.

  2. 그래프 초기화
    - 농장을 나타내는 2차원 배열(graph)을 초기화하고, 배추가 심어진 위치는 1로 표시한다.

  3. DFS 수행
    - 배추가 심어진 각 위치에서 DFS를 수행하여 연결된 모든 배추를 방문 처리한다.
    - DFS를 통해 하나의 연결 요소를 방문할 때마다 필요한 배추흰지렁이 수를 증가시킨다.
    - dfs 함수는 주어진 위치에서 인접한 배추들을 재귀적으로 방문한다. 방문한 배추는 -1로 표시하여 다시 방문하지 않도록 한다.

  4. 결과 출력
    - 각 테스트 케이스마다 계산된 배추흰지렁이의 수를 출력한다.
 */

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 깊이 우선 탐색(DFS) 수행
function dfs(graph, n, m, x, y) {
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  // 현재 노드를 아직 처리하지 않았다면
  if (graph[x][y] == 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1;
    // 상, 하, 좌, 우의 위치들도 재귀적으로 호출하여 연결된 배추들을 모두 방문
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true; // true를 반환하는 것은 새로운 연결 요소를 발견할 때마다 배추흰지렁이 수를 증가시키기위함
  }
  return false;
}

let testCases = Number(input[0]); // 테스트 케이스의 수
let line = 1;

while (testCases--) {
  // 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 위치의 개수(K)
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = []; // 그래프 정보

  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m).fill(0);
  }

  for (let i = 1; i <= k; i++) {
    let cabbages = input[line + i].split(" ").map(Number);
    // console.log("cabbages:", cabbages);
    let [y, x] = cabbages;

    graph[x][y] = 1;
  }

  // console.log("graph:", graph);
  //   [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  //   [0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
  //   [0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
  //   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let answer = 0; // 연결 요소(connected component)의 수 계산
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++; //현재 위치에서 DFS 수행
    }
  }
  line += k + 1; // 다음 테스트 케이스로 이동
  console.log(answer);
}
