function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  // 이 경우는 array의 길이가 증가할 때마다 차지하는 공간도 커진다.
  // 따라서, 이 알고리즘의 공간 복잡도는 O(n)이다.
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

console.log(
  onlyElementsAtEvenIndex([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9, 9, 99, 10])
);
