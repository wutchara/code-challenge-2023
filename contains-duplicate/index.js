/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  console.log("nums", nums);
  const numsLen = nums.length;
  for (let startIndex = 0; startIndex < numsLen; startIndex++) {
    let lastIndex = numsLen - 1;
    for (let nextIndex = startIndex + 1; nextIndex <= lastIndex; nextIndex++) {
      if (nums[startIndex] === nums[nextIndex]) {
        return true;
      }
    }
  }
  return false;
};


// Time Limit Exceeded
const arr1 = [1, 2, 3, 1];
console.log("arr1", containsDuplicate(arr1));

const arr2 = [1, 2, 3, 4];
console.log("arr2", containsDuplicate(arr2));

const arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log("arr3", containsDuplicate(arr3));
