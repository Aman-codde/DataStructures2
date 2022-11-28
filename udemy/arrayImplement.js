class newArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // display array
  show() {
    //return Object.values(this.data);
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr[i] = this.data[i];
    }
    return arr;
  }

  //add item at the end in array
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  //delete last item in array
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  insertAt(index, item) {
    //shift items at index i+1
    const itemAdded = item;
    if (index >= 0 && index < this.length) {
      for (let i = this.length; i > index; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[index] = item;
      this.length++;
      return itemAdded;
    }
    return -1;
  }

  // delete item from given index
  deleteAt(index) {
    const deletedItem = this.data[this.length - 1];
    //shift items
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    //remove last value
    delete this.data[this.length - 1];
    // decrease length by 1
    this.length--;

    return deletedItem;
  }
}

const arr = new newArray();
arr.push("hi");
arr.push("how");
arr.push("are");
arr.push("you");
console.log(arr.show());
//console.log("pop", arr.pop());
// console.log("add",arr.insertAt(2, "kim"));
// console.log(arr.length);
console.log("delete: ", arr.deleteAt(3));
console.log(arr.show());
