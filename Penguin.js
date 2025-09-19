// Penguin.js
const Animal = require("./Animal");

class Penguin extends Animal {
  constructor(name) {
    super(name || "Captain Waddle"); // silly default name
    this.species = "Penguin";
    this.sound = "Honk honk (but in a tuxedo)";
    this.canFly = false;
    this.favoriteSnack = "fish popsicle 🍦🐟";
  }

  makeSound() {
    return `${this.name} says: ${this.sound}`;
  }

  move() {
    const moves = [
      `${this.name} belly-slides across the ice like it’s a waterslide. ❄️`,
      `${this.name} waddles like a chubby little businessman in a tux. 🕴️🐧`,
      `${this.name} slips, falls, then pretends it was part of the plan.`
    ];
    return moves[Math.floor(Math.random() * moves.length)];
  }

  specialSkill() {
    return `${this.name} juggles ${Math.floor(Math.random() * 5) + 1} fish while doing the penguin dance. 🎣🐧`;
  }
}

module.exports = Penguin;

