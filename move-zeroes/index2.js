/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const lastIndex = nums.length - 1;
    let i = 0;
    let j = i + 1;

    do {
        console.log('iiiii', i);
        console.log('j', j);
        if (nums[i] === 0) {
            while (nums[j] === 0) {
                j++;
            }
            console.log('jj', j);
            if (j > lastIndex) {
                break;
            }

            // swap
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            console.log('nums', nums);
        }
        i++;
        j++;
    } while (j <= lastIndex && i < lastIndex);
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

const nums7 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
console.log('Num7', moveZeroes(nums7), nums7);