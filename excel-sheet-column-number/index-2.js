const getCharecterValue = (charecter) => {
    return charecter.charCodeAt(0) - 64;
}

const power = (value, i) => {
    let result = 1;
    while (i > 0) {
        result *= value;
        i--;
    }
    return result;
}

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const strArrRev = columnTitle.split('').reverse();
    let result = 0;
    for (const index in strArrRev) {
        const value = getCharecterValue(strArrRev[index]);
        result += value * power(26, index);
    }

    return result;
};

// console.log('titleToNumber', titleToNumber("A"));
// console.log('titleToNumber', titleToNumber("AB"));
console.log('titleToNumber', titleToNumber("ZY"));