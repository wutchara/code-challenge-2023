/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     const avg = (p => (p.reduce((a, b) => a + b) / p.length))(prices);
//     console.log('avg', avg);
//     const lastIndex = prices.length - 1;

//     let total = 0;
//     const initTempValue = -1;
//     let currentIndex = 0;

//     do {
//         // try to sell
//         // try to buy

//         let tempIndex = currentIndex + 1;
//         let targetIndex = -1;
//         let tempValue = initTempValue;

//         do {
//             console.log('tempIndex', tempIndex);
//             const compareValue = prices[tempIndex] - prices[currentIndex];
//             if (compareValue > tempValue) {
//                 tempValue = compareValue;
//                 targetIndex = tempIndex;
//             }

//             tempIndex++;
//         } while (tempIndex <= lastIndex);

//         if (tempValue === initTempValue) {
//             currentIndex++;
//             console.log('====currentIndex', currentIndex);
//             continue;
//         }

//         total += tempValue;
//         currentIndex = targetIndex + 1;
//     } while (currentIndex < lastIndex);

//     return total;
// };
var maxProfit = function (prices) {
    let max = 0;
    let start = prices[0];
    let len = prices.length;
    for (let i = 1; i < len; i++) {
        if (start < prices[i]) {
            max += prices[i] - start;
        }
        start = prices[i];
    }
    return max;
};

// output: 7 => N
const prices1 = [7, 1, 5, 3, 6, 4];
console.log('prices1: ', prices1);
console.log('output1: ', maxProfit(prices1));

// output: 4 => Y
const prices2 = [1, 2, 3, 4, 5];
console.log('prices2: ', prices2);
console.log('output2: ', maxProfit(prices2));

// output: 0 => Y
const prices3 = [7, 6, 4, 3, 1];
console.log('prices3: ', prices3);
console.log('output3: ', maxProfit(prices3));
