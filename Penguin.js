import Animal from "./Animal.js";

class Penguin extends Animal {
  constructor(name, lang = "Honk") {
    super("Penguin", name, lang);
  }

  swim() {
    console.log(`${this.name} glides smoothly through the water.`);
  }

  waddle() {
    console.log(`${this.name} waddles adorably on the ice.`);
  }

  sleep() {
    console.log(`${this.name} sleeps huddled with other penguins.`);
  }
}

export default Penguin;
