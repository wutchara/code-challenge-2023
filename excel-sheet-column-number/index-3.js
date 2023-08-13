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
    const len = columnTitle.length;
    return columnTitle.split('')
        .reduce((accumulator, currentValue, i) => {
            // console.log('i',i, currentValue);
            return accumulator += power(26, len - i - 1) * getCharecterValue(currentValue)
        }, 0);
};

// console.log('titleToNumber', titleToNumber("A"));
// console.log('titleToNumber', titleToNumber("AB"));
console.log('titleToNumber', titleToNumber("ZY"));