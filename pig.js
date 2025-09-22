class pig extends Animal {
  // overwrite parent constructor
  constructor(name, language, mustashStyle = "curly") {
    // call parent constructor with breed "pig"
    super("pig", name, language);
    
    // personal class property
    this.mustashStyle = mustashStyle;
  }
  
  // overwrite parent function
  talk() {
    // Using template literals for string concatenation
    console.log(`I'm a ${this.breed}, with ${this.mustashStyle} mustache, my name is ${this.name}`);
  }
}
