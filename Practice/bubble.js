function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

/** 
 * 
버블정렬의 시간복잡도
정렬이 이미 많이 된 배열에 대해서는 O(N)의 시간복잡도를 가질 수 있다.

(위에서 활용한 isSwap을 사용)

하지만 일반적인 경우의 버블정렬 시간복잡도는 O(n2)이다.
*/
