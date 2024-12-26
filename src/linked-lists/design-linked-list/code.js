class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

var MyLinkedList = function () {
  this.dummyHead = new Node();
  this.dummyTail = new Node();

  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let curr = this.dummyHead.next;

  while (index > 0 && curr) {
    curr = curr.next;
    index--;
  }

  if (!curr || curr === this.dummyTail) return -1;

  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let prevHead = this.dummyHead.next;

  let newNode = new Node(val);

  this.dummyHead.next = newNode;
  newNode.prev = this.dummyHead;
  newNode.next = prevHead;

  prevHead.prev = newNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let prevTail = this.dummyTail.prev;

  let newNode = new Node(val);

  this.dummyTail.prev = newNode;
  newNode.next = this.dummyTail;
  newNode.prev = prevTail;

  prevTail.next = newNode;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0) return;

  let curr = this.dummyHead.next;

  while (index > 0) {
    if (curr === this.dummyTail) return;

    curr = curr.next;

    index--;
  }

  let prev = curr.prev;

  let newNode = new Node(val);

  prev.next = newNode;
  newNode.prev = prev;
  newNode.next = curr;
  curr.prev = newNode;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || this.dummyHead.next === this.dummyTail) return;

  let curr = this.dummyHead.next;

  while (index > 0) {
    if (curr === this.dummyTail) return;

    curr = curr.next;

    index--;
  }

  if (curr === this.dummyTail) return;

  let prev = curr.prev;
  let next = curr.next;

  prev.next = next;
  next.prev = prev;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
