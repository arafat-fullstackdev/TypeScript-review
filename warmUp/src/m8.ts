{
    // oop
    class Animal{
       name: string;
       species:string;
       sound:string;
    
  //call constructor
  constructor(name:string,species:string,sound:string){
    this.name= name;
    this.species=species;
    this.sound=sound;
  }

  // create method
  makeSound(){
    console.log(`The ${this.name} says ${this.species} and${this.sound}`)
  }

}

//make instance{object}
const dog = new Animal("german kaku","run","gew gew");

const bird= new Animal('haming','bird','cu cu');

// dog.makeSound()
// bird.makeSound()

}