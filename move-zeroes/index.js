/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const len = nums.length;
    let lastIndex = len - 1;
    for (let i = 0; i < len; i++) {
        console.log('iiii', i, nums[i]);
        if (nums[i] === 0) {
            // console.log('nums=====', nums);
            // re vise 'nums'
            // move to the last index
            // nums = [...nums.slice(0, i), ...nums.slice(i + 1), nums[i]];
            for (let j = i; j < len - 1; j++) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
            // console.log('=====nums', nums);
            lastIndex--;
            if (lastIndex <= i) {
                break;
            }

            if (nums[i] === 0) {
                i--;
            }
        }
    }
};

const nums1 = [0, 1, 0, 3, 12];
console.log('Num1', moveZeroes(nums1), nums1);

const nums2 = [0];
console.log('Num2', moveZeroes(nums2), nums2);

const nums3 = [0, 0, 1];
console.log('Num3', moveZeroes(nums3), nums3);