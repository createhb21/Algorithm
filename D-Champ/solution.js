function solution(N, scores) {
  const n = N;
  if (n < 5 || n > 1000) {
    return false;
  }

  const studentScores = scores.map((score, index) => ({ score, index }));
  studentScores.sort((a, b) => b.score - a.score);
  console.log(studentScores);

  console.log("---------------------------------");

  const limitAPercent = ~~(n * 0.3);
  const limitBPercent = ~~(n * 0.7) - limitAPercent;

  let answerArr = Array(n).fill("C");

  for (let i = 0; i < limitAPercent; i++) {
    console.log(i, studentScores[i].index, answerArr[studentScores[i].index]);
    answerArr[studentScores[i].index] = "A";
  }

  console.log("---------------------------------");

  for (let i = limitAPercent; i < limitAPercent + limitBPercent - 1; i++) {
    console.log(i, studentScores[i].index, answerArr[studentScores[i].index]);
    answerArr[studentScores[i].index] = "B";
  }

  console.log("---------------------------------");

  console.log(answerArr);

  return answerArr.join("");
}

// 테스트 예제
const N = 7;
const A = [70, 45, 69, 69, 77, 81, 33];
const answer = solution(N, A);
console.log(answer); // 출력: "BCCCAAC"
