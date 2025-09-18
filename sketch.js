class Animal {
  // Constructor to set up animal properties
  constructor(br = "human", name = "Nobody", lang = "silence") {
    // Personal properties
    this.breed = br;
    this.name = name;
    this.language = lang;
  }

  talk() {
    print(this.language);
  }

  expressYourself() {
    // String concatenation example
    print("Hello, I'm a " + this.breed + " and my name is " + this.name + ". I say " + this.language);
  }
}

// Subclass for a Koala
class Koala extends Animal {
  // Constructor for the Koala class
  constructor(name, lang,) {
    
    super("Koala", name, lang);
    
  }
 //  Koala class
  eat() {
    print("I" + " am munching on some "  + "leaves.");
  }

  sleep() {
    print("I"+ " sleep for 15 hours a day.");
  }
}

function setup() {
  
  let sleepyKoala = new Koala("KOKA", "kkkkk!");

  // Let the koala talk 
  sleepyKoala.talk();
 // Let the koala express itself 
  sleepyKoala.expressYourself();

 sleepyKoala.eat();
  sleepyKoala.sleep();
}