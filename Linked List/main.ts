class node {
  value: string;
  next: node | null;
  constructor(val: string) {
    (this.value = val), (this.next = null);
  }
}

let node1 = new node("Node 1 Coy");
let node2 = new node("Node 2 is the best");
let node3 = new node("alamak node akhir");
node1.next = node2;
node2.next = node3;

let nodeSaatIni: node | null = node1;

while (nodeSaatIni !== null) {
  console.log(
    `node saat ini adalah "${nodeSaatIni.value}" dengan node selanjutnya ${nodeSaatIni.next?.value}`
  );
  nodeSaatIni = nodeSaatIni.next;
}
