{
  //Instance of Guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeVoice() {
      console.log("Make some voice");
    }


  }
  //Inheritance

  class Dog extends Animal{

    constructor(name: string, species: string){
    super(name,species)
    }

    makeBarking(){
        console.log('I am Barking')
    }

  }

  class Fox extends Animal{

    constructor(name: string, species: string){

    super(name,species)

    }
    
     makeHuHu(){
        console.log('I am Hua Hue Hua')
    }
  }
  
  //? Smart way of instance
  const isDog=(animal: Animal): animal is Dog=>{
   return animal instanceof Dog;
  }
 const isFox=(animal: Animal): animal is Fox=>{
   return animal instanceof Fox;
  }

  const getAnimal=(animal:Animal)=>{

    if(isDog(animal)){
        animal.makeBarking();
    }else if(isFox(animal)){
        animal.makeHuHu()
    }else{
        animal.makeVoice()
    }


  }

  // create instance
const dog= new Dog('Dog Bahi','Dog');
const fox= new Fox('fox Bahi','fox');

getAnimal(dog)
getAnimal(fox)



}
