// function validAnagram(a, b) {
//   if (a.length !== b.length) {
//     return false;
//   }
//   let aObj = {};
//   let bObj = {};
//   for (let val of a) {
//     aObj[val] = (aObj[val] || 0) + 1;
//   }
//   for (let val of b) {
//     bObj[val] = (bObj[val] || 0) + 1;
//   }
//   for (let key in aObj) {
//     if (!(key in bObj)) {
//       return false;
//     }
//     if (aObj[key] !== bObj[key]) {
//       return false;
//     }
//   }
//   return true;
// }

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram("anagrams", "nagaramm"));
