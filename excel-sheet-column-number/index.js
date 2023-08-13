const getCharecterValue = (charecter) => {
    // ASCII Table
    // A => 65
    // B => 66
    // console.log("A".charCodeAt(0)); // 65

    return charecter.charCodeAt(0) - 64;
}

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const len = columnTitle.length;
    if (len.length > 7 || len.length < 1) {
        return -1;
    }

    const strArr = columnTitle.split('');
    const strArrRev = strArr.reverse();
    console.log('strArr', strArr);

    // Excel
    // A => 1
    // B => 2
    // AA => 27 =  1 + 1(26)
    // AB => 28 =  2 + 1(26)
    // BA => 53 =  1 + 2(26)
    // ZY => 701 =  25 + 26(26)
    // AAA => 53 =  1 + 26(26) + 1(26)
    let result = 0;
    for (const index in strArrRev) {
        const value = getCharecterValue(strArrRev[index]);
        // console.log('index', index);
        // console.log('strArrRev[index]', strArrRev[index]);
        // console.log('value', value);
        result += value * Math.pow(26, index);
    }

    return result;
};


// console.log('titleToNumber', titleToNumber("A"));
// console.log('titleToNumber', titleToNumber("AB"));
console.log('titleToNumber', titleToNumber("ZY"));