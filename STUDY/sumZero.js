// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[right]];
    } else if (sum > 0) {
      // end가 상대적으로 더 크다는 뜻이고, 일단 start에 맞는 값이 있는지 없는지 체크해야 되기 때문에 end--를 한다.
      end--;
    } else {
      // sum < 0이 되어버리면 이전 start에 맞는 end값이 존재하지 않는다는 뜻이다.
      // 따라서 start++ 해준다.
      start++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
