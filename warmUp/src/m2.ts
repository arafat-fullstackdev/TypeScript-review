import console = require("console");
import querystring = require("querystring");

{

    // Type assertation
    let anyThing: any;

    anyThing = "Next Level Developer!";
    anyThing = 222;
    anyThing = true;

    (anyThing as boolean)

    const kgToGm=(value: string | null): string| number | undefined=>{
        if(typeof value ===  'string'){
            const convertValue= parseFloat(value)*1000;
            return` The convert value is ${convertValue}`;
        } else if(typeof value === 'number'){
            //  const convertValue= stringify(value);
            // return convertValue;

            return value * 1000;
        }else{
            console.log('Wrong input')
        }
    }
      const result =kgToGm(78) as number;
      const result1 = kgToGm("23") as string;
//  console.log(result)    

// type customError = {
//     message: string;
// }
//   try{

//   }catch(error){
  
//     console.log((error as customError).message)
//   }

// Interface 

type User1={   // TYpe Alieas declare
    name: string;
    salery: number;
}

interface User2{  // Interface declare
    name: string;
    salery: number;
}

const user1: User1={
    name: 'Hable Developer',
    salery: 12000

}

const user2: User2={
    name: 'Gablue Developer',
    salery: 23000
}


// Object -->> Array-->obj   function--> obj 
    //
}