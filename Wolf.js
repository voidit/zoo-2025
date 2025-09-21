// Lion.js
const Animal = require("./Animal");

class Wolf extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  speak() {
    return `${this.name} howls loudly! `;
  }
}

module.exports = Wolf;
