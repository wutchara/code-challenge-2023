/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // sum = (n * (n+1))/2
  const len = nums.length;
  const sum = nums.reduce((a, b) => a + b, 0);

  return Math.floor((len * (len + 1)) / 2) - sum;
};

const input1 = [3, 0, 1];
console.log("input1", missingNumber(input1));

const input2 = [0, 1];
console.log("input2", missingNumber(input2));

const input3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log("input3", missingNumber(input3));

const input4 = [1];
console.log("input4", missingNumber(input4));

const input5 = [0];
console.log("input5", missingNumber(input5));

const input6 = [1, 2];
console.log("input6", missingNumber(input6));

const input7 = [0, 1, 2];
console.log("input7", missingNumber(input7));

const input8 = [0, 2, 3];
console.log("input8", missingNumber(input8));
