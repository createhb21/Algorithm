function solution(a, b, c, d) {
  const visited = new Set(); // 이미 방문한 상태를 저장하기 위한 Set
  const queue = []; // BFS를 위한 큐
  queue.push([0, 0, 0]); // 초기 상태를 큐에 추가
  visited.add("0,0,0"); // 초기 상태를 방문한 상태로 추가

  while (queue.length > 0) {
    const [x, y, z] = queue.shift(); // 큐에서 상태를 꺼냄

    // d 리터를 만들 수 있다면 현재 횟수를 반환
    if (x === d || y === d || z === d) {
      return visited.size - 1; // 초기 상태도 1회 방문으로 카운트되므로 -1
    }

    // 현재 상태에서 가능한 모든 행동을 수행
    for (const [from, to] of [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
    ]) {
      const next = [x, y, z]; // 다음 상태를 복사
      const amount = Math.min(next[from], b - next[to]); // 이동할 액체의 양

      // 한 비커가 비어있는 경우
      if (next[from] > 0 && next[to] < b) {
        next[from] -= amount; // from 비커에서 액체를 뺌
        next[to] += amount; // to 비커에 액체를 추가
      }

      // 다음 상태가 처음 방문하는 상태라면 큐와 Set에 추가
      if (!visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([...next]);
      }
    }
  }

  return -1; // d 리터를 만들 수 없다면 -1 반환
}

console.log(solution(3, 5, 7, 1));
console.log(solution(3, 6, 9, 4));
