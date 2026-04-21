{
  // Abstraction: interface => abstract

  interface Vehicale1{  // Idea
    startEngin(): void;
    stopEngin(): void;
    move():void
  }

  class Car implements Vehicale1 {   // Real Implements
    startEngin(): void {
        console.log(`Start Engine`);
    }
    stopEngin(): void {
        console.log(`I am stop engin`)
    }

    move(): void {
        console.log(`i am moving`)
    }
    testEngine(){
        console.log(`Start Test Engine`)
    }

  }

  // make instance

//   const toyota = new Car();
//   toyota.startEngin();
//   toyota.move()
//   toyota.stopEngin()


  abstract class Vehical2{   // Idea

     abstract startEngin(): void;
   abstract stopEngin(): void;

   abstract move(): void;
    testEngine(){
        console.log(`Start Test Engine`)
    }
}

// child class
class DunlopCar extends Vehical2{  // real implement
    startEngin(): void {
        console.log('Start Again')
    }
    stopEngin(): void {
        console.log('stop up')
    }
      move(): void {
          console.log('come from Vehicle2')
      }
}

const dunlop = new DunlopCar();
dunlop.startEngin()
dunlop.move();
  

}