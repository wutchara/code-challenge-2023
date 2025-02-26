/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const min = 0;
  const max = Math.max(...nums);

  let missingNumber = max + 1;
  for (let i = min; i < max; i++) {
    if (nums.includes(i)) {
      continue;
    } else {
      missingNumber = i;
      break;
    }
  }

  return missingNumber;
};

const input1 = [3, 0, 1];
console.log("input1", missingNumber(input1));

const input2 = [0, 1];
console.log("input2", missingNumber(input2));

const input3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log("input3", missingNumber(input3));
