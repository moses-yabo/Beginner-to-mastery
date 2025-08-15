//Contructor Function

function Person(firstname, lastName) {
  this._firstName = firstname;
  this._lastName = lastName;

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalize(this._firstName);
    },
    set: function (value) {
      this._firstName = capitalize(value);
    },
  });
  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.capitalize(this._lastName);
    },
    set: function (value) {
      this._lastName = this.capitalize(value);
    },
  });
  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + this.lastName;
    },
  });
}
Person.prototype.capitalize = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const personObj = {
  _firstName: 'mtutsu',
  _lastName: 'yabo',
  get firstName() {
    return Person.prototype.capitalize(this._firstName);
  },
  set firstName(value) {
    this._firstName = Person.prototype.capitalize(value);
  },
  get lastName() {
    return Person.prototype.capitalize(this._lastName);
  },
  set lastName(value) {
    this._lastName = Person.prototype.capitalize(value);
  },
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};
const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
const person2 = Object.create(personObj);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);
