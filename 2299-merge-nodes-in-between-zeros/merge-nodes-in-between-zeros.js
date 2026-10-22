/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let current = head
    let tail = head
    while(current.next!==null){
        let sum = 0
        current = current.next
        while(current.val!==0){
            sum += current.val
            current = current.next
        }
        tail.next.val= sum
        tail =tail.next
    }
    tail.next= null
    return head.next
};