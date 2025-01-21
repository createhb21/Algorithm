function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    console.log("decimal:", decimal);

    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}

// console.log(solution(10)); // 반환값 :  1010
// console.log(solution(27)); // 반환값 :  11011
console.log(solution(12345)); // 반환값 : 11000000111001
