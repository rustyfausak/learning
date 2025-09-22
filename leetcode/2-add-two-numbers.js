/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let e = 0;
    let c = 0;
    let lastNode = null;
    let root = null;
    while (true) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        let s = (v1 + v2) * 10 ** 0 + c;
        if (s >= 10) {
            s -= 10;
            c = 1;
        }
        else {
            c = 0;
        }
        const tmp = new ListNode(s, null);
        if (root === null) {
            root = tmp;
        }
        if (lastNode !== null) {
            lastNode.next = tmp;
        }
        lastNode = tmp;
        if ((!l1 || !l1.next) && (!l2 || !l2.next)) {
            break;
        }
        if (l1 && l1.next) {
            l1 = l1.next;
        }
        else {
            l1 = null;
        }
        if (l2 && l2.next) {
            l2 = l2.next;
        }
        else {
            l2 = null;
        }
    }
    if (c) {
        lastNode.next = new ListNode(1, null);
    }
    return root;
};
