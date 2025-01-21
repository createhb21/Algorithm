// https://school.programmers.co.kr/learn/courses/30/lessons/12933

const solution = (n) =>
  Number.parseInt(
    `${n}`
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

const res = solution(118372);
console.log(res);
