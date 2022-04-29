/** @format */

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverse(head) {
  if (head == null) return;
  let current = head;
  let prev = null;
  let next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

head = reverse(head);
console.log(head);
