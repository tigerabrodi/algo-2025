/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

type ListNode = {
  val: number;
  next: ListNode | null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head: ListNode | null) {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

export {};
