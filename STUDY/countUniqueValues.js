// function countUniqueValues(arr) {
//   // arr이 텅 빈 배열이라면 그냥 0을 반환
//   if (arr.length === 0) {
//     return 0;
//   }
//   let first = 0;
//   let second = first + 1;
//   while (second < arr.length) {
//     // 두 값이 같으면 두번째 포인터를 한 칸 우측으로 이동
//     if (arr[first] === arr[second]) {
//       second++;
//     } else {
//       // 두 값이 같지 않으면 ? => 두 포인터를 모두 한 칸 우측으로 옮기고, 두 번째 포인터가 가리켰던 값을 first의 다음 자리에 원래값과 치환시킨다.
//       second++;
//       first++;
//       arr[first] = arr[second - 1];
//     }
//   }
//   return first + 1;
// }

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
