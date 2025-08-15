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
  static describe() {
    return `${this.name} is  level ${this.lvl} with ${this.points} experience points`;
  }
}
console.log(Players.describe());
