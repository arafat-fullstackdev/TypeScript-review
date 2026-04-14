{
  // oop
  //   class Animal {
  //     //  public name: string;
  //     // public species:string;
  //     // public sound:string;

  //     //call constructor
  //     constructor(
  //       public name: string,
  //       public species: string,
  //       public sound: string,
  //     ) {
  //       //propertu initilization
  //       // this.name= name;
  //       // this.species=species;
  //       // this.sound=sound;
  //     }

  //     // create method
  //     makeSound() {
  //       console.log(`The ${this.name} says ${this.species} and${this.sound}`);
  //     }
  //   }

  //make instance{object}
  //   const dog = new Animal("german kaku", "run", "gew gew");

  //   const bird = new Animal("haming", "bird", "cu cu");

  // dog.makeSound()
  // bird.makeSound()

  //example class 2

  // class Car{
  //     //constructor define
  //     constructor(public name:string,public model:string,public gps:boolean,public relese:number){

  //     }
  //     //create methods
  //     makeDrive(){
  //         console.log(`the ${this.name} of${this.model} have ${this.gps} and ${this.relese}`)
  //     }

  // }
  // const Dunlope= new Car('Dunlope','yl78',true,2008);
  // const Toyata = new Car('Toyata','rg65',true,2012);

  // Dunlope.makeDrive()
  // Toyata.makeDrive()

  // Inheritance

  class Person {
    //  name:string;
    // age:string;
    // address:string;

    constructor(
      public name: string,
      public age: number,
      public address: string,
    ) {}
    // methods

    getSleep(numOfHours: number) {
      console.log(`The man of ${this.name}${numOfHours}`);
    }
  }


  class Students extends Person {
    //constructor
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    // methods
    studentInfo() {
      console.log(`Name ${this.name} age:${this.age} and ${this.address}`);
    }
  }

  //instance
  const student1 = new Students("Hablu", 22, "comilla"); // arguments
 // student1.studentInfo();

  //inheritance 2

  class Teacher extends Person {
    //public desiganition:string;

    //constructor
    constructor(
      public name: string,
      public age: number,
      public address: string,
      public desiganition: string,
    ) {
      super(name, age, address);
      //this.desiganition=desiganition;
    }
    // methods

    takeClass(numOfClass: number) {
      console.log(
        `The man of: ${this.name} take class: ${numOfClass} Profession: ${this.desiganition}`,
      );
    }
  }

  //instance
  const teacher = new Teacher("Sultan", 22, "comilla", "Professor");
  //teacher.takeClass(4);



  //inheritance 3
  //class
  class Bike{
      // name:string;
      // model:string;
      // relese:number;
      // price:null;
  
  //constructor
  constructor(public name:string,public model:string,public relese:number,public price:null){

  }
  
  
  //method
  // getBike(){
  //   console.log(`Bike Name: ${this.name} model: ${this.model} and relese:${this.relese}`)
  // }

  }

  class Biker1 extends Bike{
    // public gps:boolean;
    constructor(name:string,model:string,relese:number,price:null, public gps:boolean){
    super(name,model,relese,price)
    }

    //method
      getBike(){
    console.log(`Bike Name: ${this.name} model: ${this.model} and relese:${this.relese},GPS:${this.gps}`)
  }
  }

  //instance {object}
  const BikeRider = new Biker1('Yahama','ygw5',2010, null,true)
  BikeRider.getBike();
}
