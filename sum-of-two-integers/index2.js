/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    console.log('aaaa', a ^ b);
    console.log('bbbb', (a & b));
    console.log('cccc', (a & b) << 1);
    if (b == 0) {
        return a;
    } else {
        return getSum(a ^ b, (a & b) << 1)
    }
};

console.log('getSum(1,2)', getSum(1, 2));
// console.log('getSum(2,3)', getSum(2, 3));