class Animal {
  // special function that takes incoming parameters
  constructor(breed="siberian", name="ollie", lang="meow"){
    //personal properties
    this.breed = breed;
    this.name = name;
    this.language = lang;
  }
  
  // personal function
  talk(){
    print(this.language);
    
  }
  expressYourself(){
    // String concotenation example
    print("Hellowww, i'm "+this.breed+", my name is "+this.name+", i say " + this.language)
  }
  
}

function setup() {
  // create Black Cat
  let blackCat = new Animal("siberian", "ollie", "meow")
  
  //let them talk
  blackCat.talk()
  blackCat.expressYourself();
}
