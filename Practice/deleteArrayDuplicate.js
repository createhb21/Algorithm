const nums = [1, 2, 3, 4, 5, 6, 6, 7, 2, 2, 8, 9];

// 1.
const uniqueNums1 = [...new Set(nums)];
console.log(uniqueNums1);

// 2.
const uniqueNums2 = nums.filter((item, i) => {
  return nums.indexOf(item) === i;
});
console.log(uniqueNums2);

// 3.
function uniqueNums3(arr) {
  const uniqueElements = {};
  const result = [];

  for (let element of arr) {
    if (!uniqueElements[element]) {
      result.push(element);
    }
    uniqueElements[element] = element;
  }
  return result;
}
console.log(uniqueNums3(nums));
