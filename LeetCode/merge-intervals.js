// 구간 병합하기

const merge = function (intervals) {
  // intervals -> 구간 시작시간 기준으로 정렬 sort()
  // 조건문
  // 1. 이전구간의 끝시간 >= 그 다음 구간의 시작시간 -> 병합
  // 2. 아닐경우 병합 x -> 결과 리스트에 추가

  if (intervals.length === 0) {
    return [];
  } else if (intervals.length === 1) {
    return intervals;
  }

  // 구간 시작시간 기준으로 정렬
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let interval of intervals) {
    let previous = result[result.length - 1];
    if (previous[1] >= interval[0]) {
      // merge
      previous[1] = Math.max(previous[1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
};
