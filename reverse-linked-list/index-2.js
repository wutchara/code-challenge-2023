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
    if (!head || !head.next) {
        return head;
    }

    const result = reverseList(head.next);
    head.next.next = head;
    head.next = null;

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