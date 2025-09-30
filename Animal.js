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
      print("Hello, I'm " + this.breed + " and" + this.language);
    }
}

function setup() {
  let blackCat = new Animal("panda","lucky", " I sleep")
  blackCat.talk();
   blackCat.expressYourself();
}
