const solution = (strings, n) =>
  strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );

const res = solution(["abce", "abcd", "cdx"], 2);
console.log(res);
