class Animal {
  // special function that takes incoming parameters
  constructor(breed="Human", name="Nobody", lang="silence"){
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
    print("Hellowww, i'm "+this.breed+" ,my name is "+this.name+" , i say " + this.language)
  }
  
}

function setup() {
  // create Black Cat
  let blackCat = new Animal("cat", "Fittu", "me me ow ow ow mi ow mi")
  
  //let them talk
  blackCat.talk()
  blackCat.expressYourself();
}

