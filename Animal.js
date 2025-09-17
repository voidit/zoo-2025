class Animal {
  constructor(br = "Human", name = "Nobody", lang = "silence") {
    this.breed = br;
    this.name = name;
    this.language = lang;
  }
  talk() {
    print(this.language);
  }
    
    expressYourself() {
      print("Hello, I'm " + this.breed + ", I say " + this.language);
    }
}

function setup() {
  let blackCat = new Animal("Penguin","lucky", "wowowow")
  blackCat.talk();
   blackCat.expressYourself();
}
