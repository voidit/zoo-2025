class Tiger extends Animal {
  // overwrite parent constructor
  constructor(name, language, stripePattern = "bold") {
    // create a clone of parent
    super("Tiger", name, (language = "Grrrooaarrr!")); // calls parent creation

    // personal class property
    this.stripePattern = stripePattern;
  }

  // overwrite parent function
  talk() {
    // Another way of String concatenation
    print(
      `I'm a ${this.breed}, with ${this.stripePattern} stripes, my name is ${this.name}`
    );
  }
}
