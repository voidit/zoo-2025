class Animal {
  constructor(br = "human", name = "Nobody", lang = "silence") {
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
  let snake = new Animal("snake","lucky","pusssssss")
  snake.talk();
   snake.expressYourself();
}
