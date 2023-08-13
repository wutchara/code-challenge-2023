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
    // create arr
    const arr = [];
    let temp = {
        ...head
    };
    while (temp.next || (!temp.next && temp.val)) {
        const currentNode = temp;
        arr.push(currentNode.val);
        temp = {
            ...currentNode.next
        };
    }
    console.log('arr', arr);

    return createListNode(arr.reverse()) || {};
};

// const head = [1, 2, 3, 4, 5];
// const rootObj = createListNode(head);
// console.log('rootObj', JSON.stringify(rootObj));
// console.log(head, '=====reverseList', reverseList(rootObj));


// const head = [1, 2];
// const rootObj = createListNode(head);
// console.log('rootObj', JSON.stringify(rootObj));
// console.log(head, '=====reverseList', reverseList(rootObj));


const head = [];
const rootObj = createListNode(head);
console.log('rootObj', JSON.stringify(rootObj));
console.log(head, '=====reverseList', reverseList(rootObj));


