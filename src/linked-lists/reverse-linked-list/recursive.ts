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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseList = function (head: ListNode | null) {
  function reversedLinkedList(node: ListNode | null): ListNode | null {
    if (!node || !node.next) {
      return node;
    }

    const reversed = reversedLinkedList(node.next);

    node.next.next = node;
    node.next = null;

    return reversed;
  }

  return reversedLinkedList(head);
};
