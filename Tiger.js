class Tiger extends Animal {
  constructor(name = "Sheru", lang = "Roarrrr", speed = "fast") {
    super("tiger", name, lang);
    this.speed = speed;
  }

  expression() {
    print("Hi I am " + this.name + 
          " and I am a " + this.breed + 
          " and I speak " + this.language + 
          " and I run " + this.speed);
  }
}
