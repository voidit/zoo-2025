class Horse extends Animal {
  constructor(name, language = "neighhhh", tailStyle = "long and flowing") {
    super("Horse", name, language);
    this.tailStyle = tailStyle;
  }

  talk() {
    print(`I'm a ${this.breed}, with a ${this.tailStyle} tail. My name is ${this.name}... ${this.language}`);
  }
}
