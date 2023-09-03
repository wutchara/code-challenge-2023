/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length;
    let result = null;
    const countObj = {};

    if (!len) {
    	return result;
    }

    // counting numbers
    for(let i = 0; i < len; i++) {
  
    	if (countObj[`${nums[i]}`]) {
    		countObj[`${nums[i]}`] = {
    			...countObj[`${nums[i]}`],
    			count: countObj[`${nums[i]}`].count + 1
    		};

    		if (countObj[`${nums[i]}`] > len/2) {
    			result = nums[i];
    			break;
    		}
    	} else {
    		countObj[`${nums[i]}`] = {
    			count: 1,
    			key: nums[i],
    		};
    	}
    }
 
	if (result === null) {
		const values = Object.values(countObj);
		const popularCount = Math.max(...values.map(o => o.count));
		const object = values.find(o => o.count === popularCount);
		result = object.key;
	}

    return result;
};


const testData1 = [3,2,3];
console.log('test1', majorityElement(testData1));

const testData2 = [2,2,1,1,1,2,2];
console.log('test2', majorityElement(testData2));

const testData3 = [];
console.log('test3', majorityElement(testData3));

const testData4 = [3];
console.log('test4', majorityElement(testData4));
