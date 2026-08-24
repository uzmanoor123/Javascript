/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let arr = new Set();
    let current = head;
    while(current!==null){
        if(arr.has(current)){
            return true
        }
        arr.add(current)
        current = current.next
    }
    return false
};