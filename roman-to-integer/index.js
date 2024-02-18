const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const mixRomanValues = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
}

const allowCharecters = Object.keys(romanValues);
console.log('allowCharecters', allowCharecters);


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const charecters = s.trim().split('');
    const charLen = charecters.length;
    let i = 0;
    let result = 0;
    do {
        const mixValue = mixRomanValues[charecters[i] + charecters[i + 1]];
        if (mixValue) {
            // check mixRoman
            result += mixValue;
            i = i + 2;
        } else {
            // check single charecters
            result += romanValues[charecters[i]];
            i++;
        }
    } while (i < charLen);

    return result;
};

const s1 = "III"
console.log(`${s1}: `, romanToInt(s1));

const s2 = "LVIII"
console.log(`${s2}: `, romanToInt(s2));

const s3 = "MCMXCIV"
console.log(`${s3}: `, romanToInt(s3));
