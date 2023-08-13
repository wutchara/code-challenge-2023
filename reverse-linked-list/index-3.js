/**
 * Definition for singly-linked list.
 * 
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createListNode(arr, index = 0) {
    if (arr[index]) {
        return new ListNode(arr[index], createListNode(arr, index + 1));
    } else {
        return;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let result = null;
    let current = head;

    while (current) {
        const next = current.next;
        // console.log('current', current);
        // console.log('next', next);
        // console.log('result', result);

        current.next = result;
        result = current;

        current = next;
    }

    return result
};

const head = [1, 2, 3, 4, 5];
const rootObj = createListNode(head);
console.log('rootObj', JSON.stringify(rootObj));
console.log(head, '=====reverseList', reverseList(rootObj));


// const head = [1, 2];
// const rootObj = createListNode(head);
// console.log('rootObj', JSON.stringify(rootObj));
// console.log(head, '=====reverseList', reverseList(rootObj));


// const head = [];
// const rootObj = createListNode(head);
// console.log('rootObj', JSON.stringify(rootObj));
// console.log(head, '=====reverseList', reverseList(rootObj));