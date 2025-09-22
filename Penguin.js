class Penguin extends Bird {
  constructor(name, language, mustashStyle = "a beak,") 
  {
    super("Penguin", name, language); // pass language directly
    this.mustashStyle = mustashStyle;
  }
  talk() {
    print(`I am a ${this.breed}, with ${this.mustashStyle} my name is ${this.name}`);
  }
}