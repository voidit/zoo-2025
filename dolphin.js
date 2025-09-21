const Animal = require("./Animal");

class Dolphin extends Animal {
  constructor(name, age) {
    super(name, age);
    this.species = "Dolphin";
  }

  speak() {
    return `${this.name} clicks and whistles! 🐬`;
  }

  move() {
    return `${this.name} swims swiftly through the waves. 🌊`;
  }

  specialSkill() {
    return `${this.name} performs a graceful flip in the air!`;
  }
}

module.exports = Dolphin;
