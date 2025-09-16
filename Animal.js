class animal {
//speacial function that takes incoming parameters
  constructor(br = "Human", name = "Nobody", lang = "silence"){
    //personal properties
      this.breed= br;
      this.name = name;
      this.language =lang;
}
//personal function
  talk() {
    print(this.language);
  }
    expressYourself(){
     //string concotenation example
    print("hello,I'm " +this.breed+ " ,I say "+ this.language);
    }


}

function setup() {
 //create pig
  let dog= new animal("dog","alex","bhaw bhaw")
  //let pig talk
   dog.talk();
   dog.expressYourself();
}
