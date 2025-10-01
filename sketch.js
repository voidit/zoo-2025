// Define Animal class
class Animal {
  constructor(name) {
    this.name = name;
  }

  talk() {
    print(this.name + " says: Rawr!");
  }

  expressYourself() {
    print(this.name + " looks humangasauras ");
  }
}

function setup() {
  createCanvas(400, 400);

  // create Black Cat
  let blackCat = new Animal("Alpino");

  // let them talk
  blackCat.talk();
  blackCat.expressYourself();
}

