function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (num) {
  this.points += num;
  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
  }
  console.log(this.describe());
};
Player.prototype.describe = function () {
  return `${this.name} is  level ${this.lvl} with ${this.points} experience points`;
};

let player1 = new Player('Andile');
let player2 = new Player('Avril');
player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

class Players {
  constructor(name) {
    this.name = name;
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
