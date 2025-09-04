class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }
  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  pop() {
    if (this.isEmpty()) return 'Underflow';
    const item = this._items[this._count - 1];
    this._count--;
    for (let i = this._count; i < this._items.length; i++) {
      this._items[i] = this._items[i + 1];
      this._items[i] = this._items[i + 1];
    }
    return item;
  }
  peek() {
    if (this.isEmpty()) {
      return 'No Items in the Stack';
    }
    return this._items[this._count - 1];
  }
  length() {}
  isEmpty() {
    return this._count === 0;
  }
  clear() {}
}
const stack = new Stack();
stack.push('item 1!');
stack.push('item 2!');
stack.push('item 3!');
stack.pop();

console.log(stack.peek());

console.log(stack);
