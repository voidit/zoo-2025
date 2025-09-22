class Panda extends Animal {
  constructor(name, language, colorPattern = "black and white") {
    super("Panda", name, language);
    this.colorPattern = colorPattern;
  }

  talk() {
    console.log(`I'm a ${this.breed}, my name is ${this.name}, I say ${this.language}.`);
  }

  eatBamboo() {
    console.log(`${this.name} loves eating bamboo!`);
  }
}
