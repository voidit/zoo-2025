class Animal{
  //special function that takes incoming parameters
  constructor(breed="dog", name="bambi", lang="wof wof"){
  //personal properties
    this.breed = breed;
    this.name = name;
    this.language = lang;
  }
//personal function
talk () {
  print(this.language);
}
  
  express(){
    print("Hello, I am" + this.breed + ", I yap "+ this.language + " , I am  " + this.name + "!!")
    
  }
}



 function setup(){
   //create Black Cat
   let Bambi = new Animal("Bambi", "small doggy", "wofwof"
   );
   let Fluffu = new Animal(" fluffy", "big doggy", "Bhou Bhou")
   
   //let them talk
   Bambi.talk();
   Bambi.express();
   
   Fluffu.talk()
   Fluffu.express()

}