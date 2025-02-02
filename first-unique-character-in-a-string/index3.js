/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // Step 1: Create a frequency map of characters in the string
  const freqMap = {};

  // Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
  }

  // Step 2: Find the first character with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (freqMap[s[i]] === 1) {
      return i; // Return the index of the first unique character
    }
  }

  return -1; // If no unique character, return -1
};

const input1 = "leetcode";
console.log("input1", firstUniqChar(input1));

const input2 = "loveleetcode";
console.log("input2", firstUniqChar(input2));

const input3 = "aabb";
console.log("input3", firstUniqChar(input3));

const input4 = "aadadaad";
console.log("input4", firstUniqChar(input4));
