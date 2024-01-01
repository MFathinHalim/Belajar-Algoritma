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
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

let head: null | node = null;
head = insertLast(head, "node 3");
head = insertFirst(head, "node 2");
head = insertLast(head, "node 4");
head = insertLast(head, "node terakhir");
head = insertFirst(head, "node 1");
printList(head);
