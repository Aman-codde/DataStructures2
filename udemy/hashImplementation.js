class HashTable1 {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    this.data[address] = [key, value];
    return this.data[address];
  }

  get(key) {
    for (let index in this.data) {
      if (this.data[index][0] === key) {
        return this.data[index][1];
      }
    }
    return "Key not found";
  }
}

const h1 = new HashTable1(50);
console.log(h1.set("grapes", 10000));
console.log(h1.get("grapes"));
console.log(h1.set("apples", 5000));
