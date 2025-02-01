/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length - 1;

  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

const arr1 = [1, 2, 3, 1];
console.log("arr1", containsDuplicate(arr1));

const arr2 = [1, 2, 3, 4];
console.log("arr2", containsDuplicate(arr2));

const arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log("arr3", containsDuplicate(arr3));
