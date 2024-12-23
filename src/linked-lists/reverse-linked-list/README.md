```ts
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
```

This is the iterative solution. We use two pointers, prev and curr. The idea is that we keep track of the current next, from there on we can simply modify all the other pointers.

Key here is in the end to return prev. That's the new head. Curr will be null at the end of the loop. After we're done iterating over the last node, prev will be the last node but curr will be null. It's important to think here what happens for each iteration of a node.
