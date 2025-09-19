
const Animal = require("./Animal");

class Penguin extends Animal {
  constructor(name) {
    super(name || "Pingu"); // default silly penguin name
    this.species = "Penguin";
    this.sound = "Honk! 🐧";
    this.canFly = false;
    this.slidesOnBelly = true;
  }

  makeSound() {
    return `${this.name} goes ${this.sound}`;
  }

  move() {
    if (this.slidesOnBelly) {
      return `${this.name} slides gracefully on its belly across the ice. ❄️`;
    } else {
      return `${this.name} waddles awkwardly but adorably.`;
    }
  }

  specialSkill() {
    return `${this.name} forms a penguin dance party with its friends. 🕺🐧`;
  }
}

module.exports = Penguin;

