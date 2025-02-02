/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const str_arr = s.split("");
  const len = str_arr.length;

  for (let i = 0; i < len; i++) {
    let isUniq = true;

    for (let j = 0; j < len; j++) {
      if (i === j) {
        continue;
      }

      if (str_arr[i] === str_arr[j]) {
        isUniq = false;
        break;
      }
    }

    if (isUniq) {
      return i;
    }
  }

  return -1;
};

const input1 = "leetcode";
console.log("input1", firstUniqChar(input1));

const input2 = "loveleetcode";
console.log("input2", firstUniqChar(input2));

const input3 = "aabb";
console.log("input3", firstUniqChar(input3));
