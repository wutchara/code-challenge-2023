/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let firstArr = [];
    let secondArr = [];
    let firstPositive = true;
    let secondPositive = true;

    if (a >= 0) {
        firstArr = new Array(a).fill(true);
    } else {
        firstPositive = false;
    }

    if (b >= 0) {
        secondArr = new Array(b).fill(true);
    } else {
        secondPositive = false;
    }

    console.log('firstArr', firstArr, firstPositive);
    console.log('secondArr', secondArr, secondPositive);
    const abs_a = Math.abs(a);
    const abs_b = Math.abs(b);

    if (firstPositive && secondPositive) { // (I+) + (I+)
        return firstArr.concat(secondArr).length;
    } else if (!firstPositive && !secondPositive) { // (I-) + (I-)
        firstArr = new Array(abs_a).fill(true);
        secondArr = new Array(abs_b).fill(true);
        return firstArr.concat(secondArr).length * (-1);
    } else { // (I+) + (I-) => a + (-b) = a - b

        if (abs_a > abs_b) { // => result is I+
            firstArr = new Array(abs_a).fill(true);
            secondArr = new Array(abs_b).fill(true);
            const result = firstArr.slice(secondArr.length).length;
            return firstPositive || result === 0 ? result : (result * (-1));
        } else { // => result is I- => b > a
            firstArr = new Array(abs_a).fill(true);
            secondArr = new Array(abs_b).fill(true);
            const result = secondArr.slice(firstArr.length).length;

            console.log('secondArr', secondArr);
            console.log('firstArr', firstArr);
            console.log('result', result);
            return secondPositive || result === 0 ? result : (result * (-1));
        }
    }
};


// console.log('getSum(1,2)', getSum(1, 2));
// console.log('getSum(2,3)', getSum(2, 3));
// console.log('getSum(-1,1)', getSum(-1, 1));
// console.log('getSum(0,17)', getSum(0, 17));
// console.log('getSum(-12,-8)', getSum(-12, -8));
// console.log('getSum(-14,16)', getSum(-14, 16));
// console.log('getSum(-1,0)', getSum(-1, 0));
console.log('getSum(0,-1)', getSum(0, -1));