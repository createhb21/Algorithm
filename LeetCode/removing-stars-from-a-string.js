const removeStart = function (s) {
  const stack = [];

  for (const char of s) {
    if (char !== "*") {
      stack.push(char);
    } else if (stack.length) {
      stack.pop();
    }
  }

  return stack.join("");
};
