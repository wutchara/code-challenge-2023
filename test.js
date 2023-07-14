// Swap array(in-place)
const nums = [1, 2, 3];
const low = 0;
const high = 2;
console.log('==nums', nums); // [ 1, 2, 3 ]
[nums[low], nums[high]] = [nums[high], nums[low]];
console.log('nums==', nums); // [ 3, 2, 1 ]