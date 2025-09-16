class Animal {
  // special function that takes incoming parameters
  constructor(breed="Human", name="Nobody", language="silence") {
    //personal properties
    this.breed = breed;
    this.name = name;
    this.language = language;
  }

  // personal function
  talk() {
    print(this.language);
  }

  expressYourself() {
    // String concotenation example
    print("Hello, I'm " + this.breed + " , I say " + this.language);
  }
}

function setup() {
  //create Peacock
  let Peacock= new Animal("Peacock", "colourful", "I am most beautiful");
  
  //let them talk
  Peacock.talk();
  Peacock.expressYourself();
}
