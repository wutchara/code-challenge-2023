/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let str_arr = s.split("");
  const len = str_arr.length;

  do {
    let isUniq = true;
    const i = 0;
    for (let j = 1; j < str_arr.length; j++) {
      if (str_arr[i] === str_arr[j]) {
        // str_arr.splice(j, 1);
        // str_arr.splice(i, 1);

        const remove_letter = str_arr[i];
        let remove_index = str_arr.indexOf(remove_letter);
        do {
          str_arr.splice(remove_index, 1);
          remove_index = str_arr.indexOf(remove_letter);
        } while (remove_index > -1);

        isUniq = false;
        break;
      }
    }

    if (isUniq) {
      return s.indexOf(str_arr[i]);
    }
  } while (str_arr.length > 0);

  return -1;
};

const input1 = "leetcode";
console.log("input1", firstUniqChar(input1));

const input2 = "loveleetcode";
console.log("input2", firstUniqChar(input2));

const input3 = "aabb";
console.log("input3", firstUniqChar(input3));

const input4 = "aadadaad";
console.log("input4", firstUniqChar(input4));
