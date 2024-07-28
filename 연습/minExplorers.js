// /**
//  *
// 1. 고공 낙하 탐험대가 낙하산을 이용해 탐험 지역에 내린 후 탐험 임무를 수행하려 합니다.

// 2. 탐험 임무를 수행하는 지역은 n x n크기의 정사각 격자형 지역으로, 격자 한 칸의 크기는 1x 1 정사각형입니다.

// 3. 각 격자 칸은 평지이거나 또는 물 웅덩이로, 물 웅덩이가 있는 칸으로는 내리거나 지나갈 수 없습니다.

// 4. 각 탐험 대원은 상, 하, 좌, 우로 인접한 칸으로 한 칸씩 이동이 가능하며, 각 칸을 방문할 때마다 탐험 기록을 본부로 전송합니다.
// // => 백준 "유기농 배추"랑 비슷한 유형

// 보다 효율적인 탐험을 위해 탐험대는 다음과 같은 규칙으로 이 지역을 탐험하려 합니다.

//   • 탐험 대원은 낙하산을 이용해 아무 격자 칸에 내려서 탐험을 시작합니다.
//   • 단, 효율적인 탐험을 위해 탐험을 한번 수행한 칸은 다시 지나가지 않습니다. => 방문 처리하기 + 돌아갈 수 없다!
//   • 다른 사람이 탐험을 수행한 칸 또한 지나가지 않습니다.
//   • 되도록 적은 사람이 탐험 임무를 수행하도록 합니다.
//   • 탐험은 한 번에 한 사람씩 진행합니다.
//   • 한 사람이 탐험을 끝내면 그다음 사람이 탐험을 시작합니다.

// 지역의 크기 n, 물웅덩이 위치 정보가 담긴 2차원 배열 water가 매개변수로 주어질 때,
// 이 지역을 규칙에 맞게 탐험하기 위해 필요한 최소 인원수를 return 하도록 solution 함수를 완성해주세요.

// input => 지역의 크기 n, 물웅덩이 위치 정보가 담긴 2차원 배열 water
// output => 이 지역을 규칙에 맞게 탐험하기 위해 필요한 최소 인원수

// 제한사항
//   • n은 3 또는 4입니다.
//   • water의 세로(행) 길이는 1 이상 n2 - 1 이하입니다.  => 3X3일때 최대 8개, 4X4일때 최대 15개
//   • water의 각 행은 [세로 좌표, 가로 좌표] 형태입니다. => r행,c열
//   • 같은 물 웅덩이 좌표가 중복해서 주어지지 않습니다.
//   • 각 좌표는 1 이상 n 이하인 자연수입니다.
//   • 모든 칸이 물 웅덩이로 된 지형이 주어지는 경우는 없습니다.

// 입출력 예
// n | water | result
// 4 | [[3,2]] | 1
// 4 | [[2,3],[3,2],[4,3]] | 3
// 4 | [[1,2],[2,3],[3,11,[3,4]] | 3
// 3 | [[1,3], [2,11, [3,3]] | 2
//  */

// // function solution(n, water) {
// //   // 지역의 크기 n, 물웅덩이 위치 정보가 담긴 2차원 배열 water
// //   // n은 3 또는 4 => 3X3 혹은 4X4 정사각형

// //   // 1. 물웅덩이가 포함된 형태를 그리자. 물웅덩이는 최소 한개 이상이다.
// //   let matrix = Array.from({ length: n }, () => Array(n).fill(0));
// //   // matrix
// //   // [ 0, 0, 0, 0 ]
// //   // [ 0, 0, 0, 0 ]
// //   // [ 0, 1, 0, 0 ]
// //   // [ 0, 0, 0, 0 ]

// //   // 2. matrix를 돌면서 물웅덩이를 만들자
// //   for (let [row, col] of water) {
// //     matrix[row - 1][col - 1] = 1;
// //   }

// //   // 3. 탐험가가 matrix를 돌면서 모든 노드를 방문하기
// //   let minExplorers = 0; // OUTPUT 변수 선언
// //   let directions = [[-1, 0], [1, 0], [0, -1], 0, 1];

// //   function depthFirstRecursive(row, col) {
// //     // 단, 효율적인 탐험을 위해 탐험을 한번 수행한 칸은 다시 지나가지 않습니다. => 방문 처리하기 + 돌아갈 수 없다!
// //     // 다른 사람이 탐험을 수행한 칸 또한 지나가지 않습니다.
// //     // => 다른 탐험가가 지나간 곳도 1로 처리

// //     const result = [];
// //     const visited = {};

// //     (function dfs(vertex) {
// //       if (!vertex) return null;
// //       visited[vertex] = true;
// //       result.push(vertex);
// //       adjacencyList[vertex].forEach((neighbor) => {
// //         if (!visited[neighbor]) {
// //           return dfs(neighbor);
// //         }
// //       });
// //     })(start);

// //     return result;
// //   }

// //   // return minExplorers;
// // }

// // [ 0, 0, 0, 0 ]
// // [ 0, 0, 0, 0 ]
// // [ 0, 1, 0, 0 ]
// // [ 0, 0, 0, 0 ]

// // [ 0, 0, 0, 0 ]
// // [ 0, 0, -1, 0 ]
// // [ 0, -1, 0, 0 ]
// // [ 0, 0, -1, 0 ]

// // [ 0, 0, 0, 0 ]
// // [ 0, -1, 0, 0 ]
// // [ 0, 0, -1, 0 ]
// // [ 0, -1, 0, 0 ]

// // console.log(solution(4, [[3, 2]]));

// // ---------------------------------------------------------------------------------------------------------------------------------------------

// // function solution(n, water) {
// //   // Create a 2D grid initialized with 0 (land)
// //   let grid = Array.from({ length: n }, () => Array(n).fill(0));

// //   // Mark water cells with 1
// //   for (let [row, col] of water) {
// //     grid[row - 1][col - 1] = 1;
// //   }

// //   // Directions for moving up, down, left, right
// //   const directions = [
// //     [1, 0],
// //     [-1, 0],
// //     [0, 1],
// //     [0, -1],
// //   ];

// //   // Function to perform DFS and mark visited cells
// //   function dfs(x, y) {
// //     // Create a stack for DFS
// //     const stack = [[x, y]];

// //     while (stack.length > 0) {
// //       const [cx, cy] = stack.pop();

// //       // Skip if out of bounds or already visited or water
// //       if (
// //         cx < 0 ||
// //         cx >= n ||
// //         cy < 0 ||
// //         cy >= n ||
// //         grid[cx][cy] === 1 ||
// //         grid[cx][cy] === -1
// //       ) {
// //         continue;
// //       }

// //       // Mark the cell as visited
// //       grid[cx][cy] = -1;

// //       // Add all 4 neighboring cells to the stack
// //       for (const [dx, dy] of directions) {
// //         stack.push([cx + dx, cy + dy]);
// //       }
// //     }
// //   }

// //   let explorersCount = 0;

// //   // Traverse the grid to find all connected components
// //   for (let i = 0; i < n; i++) {
// //     for (let j = 0; j < n; j++) {
// //       if (grid[i][j] === 0) {
// //         // Found a new connected component
// //         dfs(i, j);
// //         explorersCount++;
// //       }
// //     }
// //   }

// //   return explorersCount;
// // }

// // ---------------------------------------------------------------------------------------------------------------------------------------------

// function solution(n, water) {
//   // 격자 초기화
//   const graph = Array.from({ length: n }, () => Array(n).fill(0));

//   // 물이 있는 위치를 -1로 설정
//   for (const [x, y] of water) {
//     graph[x - 1][y - 1] = -1;
//   }

//   // DFS 함수 정의
//   function dfs(x, y) {
//     // 범위를 벗어나거나 물이 있는 위치거나 이미 방문한 위치인 경우 종료
//     if (x < 0 || x >= n || y < 0 || y >= n || graph[x][y] !== 0) {
//       return false;
//     }

//     // 방문 표시
//     graph[x][y] = 1;

//     // 상, 하, 좌, 우 탐색
//     const directions = [
//       [x - 1, y],
//       [x + 1, y],
//       [x, y - 1],
//       [x, y + 1],
//     ];

//     let deadEnd = true;
//     for (const [nx, ny] of directions) {
//       if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 0) {
//         deadEnd = false;
//         dfs(nx, ny);
//       }
//     }

//     return !deadEnd;
//   }

//   let answer = 0;

//   // 모든 위치를 탐색하여 DFS 수행
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       // 탐험 가능한 새로운 구역을 발견하면
//       if (graph[i][j] === 0) {
//         if (dfs(i, j)) answer++; // 새로운 구역 시작
//       }
//     }
//   }

//   return answer;
// }

// // Example usage:
// console.log(solution(4, [[3, 2]])); // Output: 1
// console.log(
//   solution(4, [
//     [2, 3],
//     [3, 2],
//     [4, 3],
//   ])
// ); // Output: 3
// console.log(
//   solution(4, [
//     [1, 2],
//     [2, 3],
//     [3, 1],
//     [3, 4],
//   ])
// ); // Output: 3
// console.log(
//   solution(3, [
//     [1, 3],
//     [2, 1],
//     [3, 3],
//   ])
// ); // Output: 2

// // ---------------------------------------------------------------------------------------------------------------------------------------------
// // 리팩토링 전 코드 조각들
// // ---------------------------------------------------------------------------------------------------------------------------------------------
// // 2. matrix를 돌면서 물웅덩이를 만들자
// // for (let i = 0; i < matrix.length; i++) {
// //   water.forEach((eachWater) => {
// //     let [row, col] = eachWater;
// //     if (i === row) {
// //       matrix[i - 1][col - 1] = 1;
// //     }
// //   });
// // }
