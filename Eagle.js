class Animal {
  constructor(breed="Eagle", name="Baji", language="keeah") {
    this.breed = breed;
    this.name = name;
    this.language = language;
  }

  talk() {
    console.log(this.language);
  }

  expressYourself() {
    console.log("Hello, I'm " + this.breed + ", I say " + this.language);
  }
}

let a = new Animal();
a.expressYourself();
