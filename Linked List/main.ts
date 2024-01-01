class node {
  value: string;
  next: node | null;
  constructor(val: string) {
    (this.value = val), (this.next = null);
  }
}

function insertFirst(head, data) {
  let noded = new node(data);
  noded.next = head;
  return noded;
}

function insertLast(head, data) {
  let newNode = new node(data);

  if (head === null) {
    return newNode;
  }

  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
  return head;
}

function printList(head) {
  console.log("Element Dalam List: ");
  if (head === undefined || head === null) {
    return;
  }
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

function deleteLast(head) {
  if (head === null || head.next === null) {
    return;
  }

  let current = head;
  let prev: any | null;

  while (current.next !== null) {
    prev = current;
    current = current.next;
  }

  prev.next = null;
  return head;
}

function deleteFirst(head) {
  if (head !== null) {
    return head.next;
  }
  return null;
}

let head: null | node = null;
head = deleteFirst(head);
printList(head);
