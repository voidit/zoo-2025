class Pig extends Animal {
  // overwrite parent constructor
  constructor(name, noseStyle = "round", language = "oink") {
    // call parent constructor (name, breed, language)
    super(name, "Pig", language); 
    this.noseStyle = noseStyle;
  }

  // overwrite parent function
  expressYourself() {
    console.log(
      `I'm a ${this.breed}, with a ${this.noseStyle} nose. My name is ${this.name} and I say ${this.language}`
    );
  }
}

function setup() {
  let piggy = new Pig("Peppa", "round", "oink");
  piggy.expressYourself();
}

setup();
