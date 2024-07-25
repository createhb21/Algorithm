// 빈도수 세기, 다중 포인터

// areThereDuplicates 솔루션 (다중 포인터)
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// areThereDuplicates One Liner 솔루션
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

function areThereDuplicates(...params) {
  console.log(":params", params);
  return new Set(params).size !== params.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
