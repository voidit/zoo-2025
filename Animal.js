class animal {
  //special funtion that takes incoming parameters
  constructor(br="human", name="nobody", lang="silence"){
    //personal properties
    this.breed = br;
    this.name = name;
    this.language = lang; 
}
  
  //personal function
  talk() {
    print(this.language);
  }
  
  expressYourself(){
    //string concotenation example
    print("hello, I'm " + this.breed +  " , I say " + this.language);
}
}

function setup() {
  //create panda
  let panda = new animal("panda", "blacky", "rwwww");
  
  //let them talk
  panda.talk();
  panda.expressYourself(); 
}
