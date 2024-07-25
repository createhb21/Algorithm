// function collectOddValues(arr) {
//   let newArr = [];
//   // 배열의 길이가 0에 다다르면 newArr 반환하며 함수 종료
//   if (arr.length === 0) {
//     return newArr;
//   }
//   // 만약 배열 맨 앞의 요소가 홀수라면 ? -> newArr에 push
//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }
//   // 앞에서 정의된 newArr와 맨 앞이 잘린 arr을 합친다.
//   // newArr = [...newArr, ...collectOddValues(arr.slice(1))]
//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }

function collectOddValues(arr) {
  let result = [];
  // 이와 같은 헬퍼 재귀함수가 내장되어 있다.
  function helper(helperInput) {
    // 앞부분이 계속 slice되다 보면 input의 길이가 0인 지점에 다다른다.
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // 계속 배열의 앞 부분을 잘라 나가며 함수를 재귀 호출 한다.
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
