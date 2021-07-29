/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let newTail: ListNode = head;
    let prev: ListNode = head;
    let current: ListNode = prev.next;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    newTail.next = null;
    return prev;
};