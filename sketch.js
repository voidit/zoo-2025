class Animal {
  constructor(br = "Human", name = "Nobody", lang = "silence") {
    this.breed = br;
    this.name = name;
    this.language = lang;
  }

  talk() {
    console.log(this.language);
  }

  expressYourself() {
    console.log("Hello , I'm "+this.breed+" ,I like "+this.name+" I say " + this.language)
  }
}

function setup() {

  let blackCat = new Animal("a dog", "chewing socks" ,"bhaw bhaw")
  blackCat.talk();
  blackCat.expressYourself();
}
