// Animal.js

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.species = "Unknown";
  }

  speak() {
    return `${this.name} makes a sound.`;
  }

  move() {
    return `${this.name} moves around.`;
  }

  eat() {
    return `${this.name} eats something.`;
  }
}

export default Animal;
