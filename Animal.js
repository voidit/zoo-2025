class Animal {
  //special function that takes incoming parameters
  constructor(br = "human", name = "nobody", lang = "silence") {
    // personal properties
    this.breed = br;
    this.name = name;
    this.language = lang;
  }

  //personal function
  talk() {
    print(this.language);
  }

  expressYourself() {
    //string concotenation example
    print("hello, I'm " + this.breed + ",I say " + this.language);
  }
}
function setup() {
  //create White Cow
  let WhiteCow = new Animal("cow", "blacky", "moww-wwww-ww");
  //let them talk
 WhiteCow.talk();
  WhiteCow.expressYourself();
}
