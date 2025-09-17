class Animal {
  // special function that takes incoming parameters  
  constructor(br="human", name="Edward", lang="silence"){
    //personal properties
    this.breed= br;
    this.name= name;
    this.language = lang;
  }
  //personal function 
  talk(){
    print(this.language);
  }
    
    expressYourself(){
      //String concotenation example 
      print("Hello, I'm "+ this.breed+". My name is "+ this.name+ ". I say "+ this.language)
  }
}
 
function setup() {
  //create Black Cat
  let blackCat= new Animal("a cat","Edward","mewww-meww-mewww")
  
  //let them talk
  blackCat.talk();
  blackCat.expressYourself();
}
