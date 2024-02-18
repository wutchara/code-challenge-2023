
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {values} number[]
 * @return {ListNode} node
 */
function createLists(values) {
    let result;
    let latestNote;
    values.forEach((v, i) => {
        if (i === 0) {
            result = new ListNode(v);
            latestNote = result;
        } else {
            latestNote.next = new ListNode(v);
            latestNote = latestNote.next;
        }
    });

    return result;
}

/**
 * @param {ListNode} node
 */
function strList(node) {
    return JSON.stringify(node);
}

const head = createLists([4, 5, 1, 9]);
console.log('head', strList(head));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


// const node1 = head.next;
// console.log('========node1', strList(node1));
// deleteNode(node1);
// console.log('node1========', strList(node1));

