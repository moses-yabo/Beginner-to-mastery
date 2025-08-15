class Name {
  constructor(name) {
    this.name = name;
    this.logName(this.name);
  }

  logName(name) {
    console.log(`the name is ${name}`);
  }
}
class Players extends Name {
  constructor(name) {
    super(name);
    this.lvl = 1;
    this.points = 0;
  }

  gainXp(num) {
    this.points += num;
    if (this.points >= 10) {
      this.lvl++;
      this.points -= 10;
    }
    console.log(this.describe());
  }
  describe() {
    return `${this.name} is  level ${this.lvl} with ${this.points} experience points`;
  }
}

class Drivers extends Name {
  constructor(name, carModel, age) {
    super(name), (this.carModel = carModel);
    this.age = age;

    console.log(this.whoAreYou());
    console.log(this.whatIsYourFavCar());
  }
  logName(name) {
    console.log(
      `And His name iiiiiiiis ${name}${name[name.length - 1]}${
        name[name.length - 1]
      }${name[name.length - 1]}.... !`
    );
  }

  whoAreYou() {
    return `my name is ${this.name}  and iam ${this.age} years old and I drive ${this.carModel}`;
  }
  whatIsYourFavCar() {
    return `my fAV CAR IS ${this.carModel} `;
  }
}

let clasPlayer1 = new Players('Anthea');
clasPlayer1.gainXp(8);
clasPlayer1.gainXp(8);
clasPlayer1.gainXp(8);
clasPlayer1.gainXp(8);
let clasPlayer2 = new Players('Nomfundo');
clasPlayer2.gainXp(4);
clasPlayer2.gainXp(6);
clasPlayer2.gainXp(7);
clasPlayer2.gainXp(4);
const driver1 = new Drivers('Mabhena', 'Suzuki Tiguan', 30);

const driver2 = new Drivers('Mkhize', 'Quantum', 37);
