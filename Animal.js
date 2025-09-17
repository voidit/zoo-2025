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
      print("Hello, I'm" + this.breed + ", I saw" + this.language);
    }
}

function setup() {
  let blackCat = new Animal("lion","lucky", "roarrr")
  blackCat.talk();
   blackCat.expressYourself();
}
