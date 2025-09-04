// const sym = Symbol();
// const sym1 = Symbol('foo');
// const sym2 = Symbol('bar');
// console.log(sym, sym1, sym2);
// console.log(typeof sym);

// console.log(sym1.description);
// console.log(sym2.description);
// console.log(sym2.valueOf());
// const user = {
//   [Symbol('id')]: 1,
//   name: 'Lindile',
//   age: 30,
// };
// console.log(Symbol('foo') === Symbol('foo'));
// console.log(user[Symbol('id')]);
// for (const key in user) {
//   console.log(key);
// }
// console.log(Object.getOwnPropertySymbols(user));
// const sym3 = Symbol.for('foo');
// const sym4 = Symbol.for('foo');
// console.log(sym3 === sym4);
// console.log(Symbol.keyFor(sym3));
// console.log(Object.getOwnPropertyNames(Symbol));
const app = {
  nexIndex: 0,
  teams: [
    'leven atackers',
    ' home defenders',
    'black panthers',
    'strikers',
    'tshisa mpama',
  ],
  next() {
    if (this.nexIndex >= this.teams.length) {
      return { done: true };
    }
    const returnValue = { value: this.teams[this.nexIndex], done: false };
    this.nexIndex++;
    return returnValue;
  },
};
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
const appSymbol = {
  teams: [
    'leven atackers',
    ' home defenders',
    'black panthers',
    'strikers',
    'tshisa mpama',
  ],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};
// const iterators = appSymbol[Symbol.iterator]();
// for (const element of appSymbol) {
//   console.log(element);
// }
// let next = iterators.next();
// while (!next.done) {
//   console.log(next.value);
//   next = iterators.next();
// }

function* createTemIterator(teams) {
  for (let index = 0; index < teams.length; index++) {
    yield teams[index];
  }
}

const teams = [
  'leven atackers',
  ' home defenders',
  'black panthers',
  'strikers',
  'tshisa mpama',
];

const iterator = createTemIterator(teams);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
for (const element of createTemIterator(teams)) {
  console.log(element);
}

console.log('spREAD', [...createTemIterator(teams)]);
