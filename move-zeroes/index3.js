/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0;
    let j = i + 1;
    const lastIndex = nums.length - 1;

    while (lastIndex > 0 && i < lastIndex && j <= lastIndex) {
        console.log(i, j);
        if (nums[i] === 0) {
            if (nums[j] !== 0) {
                console.log('111', nums);
                // swap
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                console.log('2222', nums);
                i++;
            }
        } else {
            i++;
        }
        j++;
    }
};


// const nums1 = [0, 1, 0, 3, 12];
// console.log('Num1', moveZeroes(nums1), nums1);

// const nums2 = [0];
// console.log('Num2', moveZeroes(nums2), nums2);

// const nums3 = [0, 0, 1];
// console.log('Num3', moveZeroes(nums3), nums3);

// const nums4 = [0, 0];
// console.log('Num4', moveZeroes(nums4), nums4);

// const nums5 = [1, 0];
// console.log('Num5', moveZeroes(nums5), nums5);

// const nums6 = [2, 1];
// console.log('Num6', moveZeroes(nums6), nums6);

// const nums7 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
// console.log('Num7', moveZeroes(nums7), nums7);

// const nums8 = [0, 1];
// console.log('Num8', moveZeroes(nums8), nums8);

const nums9 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
console.log('Num9', moveZeroes(nums9), nums9);