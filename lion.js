// Lion.js
const Animal = require("./Animal");

class Lion extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  speak() {
    return `${this.name} roars loudly! 🦁`;
  }
}

module.exports = Lion;
