{
    //conditional type
    type a1= number;
    type b1= undefined;

    type x = a1 extends null? true: false;
    type y = b1 extends undefined? undefined:any;

    type quaterAmir={
        bike:string;
        car:string;
        ship:string;
    }

    //Dynamic code (key of operator)
    type checkVehical<T> = T extends keyof quaterAmir? true:false;


    // Hard code
    // type checkVehical<T> = T extends "car"|"bike"|"ship"? true:false;

    type hasVechical= checkVehical<"ship">;

    //? Maped

    const arryNumber: number[]= [1,2,3,4,5];

    // const arryString: string[]= ['1','2','3','4','5'];
    const arryString: string[]= arryNumber.map((number)=>
        number.toString()
    );

    //console.log(arryString);

    //Mapped type
  type AreaNumber={
    height: number;
    width:number;
  }
   

//   hard code

// type AreaString={
//     [key in 'height'| 'weidth']: string
// }

//dynamic

type Height= AreaNumber["height"]  //Look up type

// T=> {height: string;width:number}
type AreaString<T>={
    [key in keyof T]: T[key]
}

const area1: AreaString<{height: string;width:number}>={
   height: "100",
   width: 23
}
}