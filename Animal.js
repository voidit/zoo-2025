class Animal{
  //special function that takes incoming parameters
  constructor(br="human", name="Nobody", lang="silence"){
    this.breed = br
    this.name = name
    this.language = lang
  }
  
  // personal fucntion
  talk(){
    print(this.language);
    
  }
  
  expressYourself(){
    print("Hello, I'm a "+this.breed+"! My name is, "+this.name+" and I talk "+this.language+" Quack! Quack!")
  }
}
