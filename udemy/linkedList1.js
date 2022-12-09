//10->15->20

class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // add value to the end of linkedlist
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const l1 = new linkedList(19);
l1.append(25);
l1.append(60);
l1.append(5);
l1.append(90);
l1.append(70);
l1.prepend(2);
console.log(l1);
