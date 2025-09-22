class BlackPanther extends Animal {
    //overwrite parent constructor
    constructor(name, language, clawType="sharp") {
        // create a clone of parent
        super("BlackPanther", name, language="roarrr");
        //calls parent creation

        // personal class property
        this.clawType = clawType
    }

    //overwrite parent function
    talk() {
        // Another way of String concotenation
        print(I'm a ${this.breed}, with ${this.clawType} claws my name is ${this.name}...${this.language});
    }
}
