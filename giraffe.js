// Giraffe.js
const Animal = require("./Animal");

class Giraffe extends Animal {
  constructor(name) {
    super(name || "Long Neck Larry"); // silly default name
    this.species = "Giraffe";
    this.sound = "Munch munch (with extra neck power)";
    this.canFly = false;
    this.favoriteSnack = "acacia leaves 🌿";
  }

  makeSound() {
    return `${this.name} says: ${this.sound}`;
  }

  move() {
    const moves = [
      `${this.name} gracefully struts with legs that look like stilts. 🦒`,
      `${this.name} gallops awkwardly but majestically across the savanna. 🌾`,
      `${this.name} bends its long neck down in slow motion to sip water. 💧`
    ];
    return moves[Math.floor(Math.random() * moves.length)];
  }

  specialSkill() {
    return `${this.name} uses its super-long neck to reach snacks no one else can. 🍃🦒`;
  }
}

module.exports = Giraffe;
