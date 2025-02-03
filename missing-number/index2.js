/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // desc
  const nums_sorted = nums.sort((a, b) => b - a);
  console.log("nums_sorted", nums_sorted);
  const len = nums.length;

  if (nums_sorted[nums_sorted.length - 1] !== 0) {
    return 0;
  }

  for (let i = 0; i < len; i += 1) {
    const result = nums_sorted[i] - nums_sorted[i + 1];
    if (result != 1) {
      // console.log("nums_sorted[i]", nums_sorted[i]);
      if (result > 1) {
        return nums_sorted[i] - 1;
      } else {
        return nums_sorted[i] === 0 ? nums_sorted[0] + 1 : nums_sorted[i] - 1;
      }
    }
  }

  return nums_sorted[0] + 1;
};

// const input1 = [3, 0, 1];
// console.log("input1", missingNumber(input1));

// const input2 = [0, 1];
// console.log("input2", missingNumber(input2));

// const input3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// console.log("input3", missingNumber(input3));

// const input4 = [1];
// console.log("input4", missingNumber(input4));

// const input5 = [0];
// console.log("input5", missingNumber(input5));

// const input6 = [1, 2];
// console.log("input6", missingNumber(input6));

// const input7 = [0, 1, 2];
// console.log("input7", missingNumber(input7));

const input8 = [0, 2, 3];
console.log("input8", missingNumber(input8));
