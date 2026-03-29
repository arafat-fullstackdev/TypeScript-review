{
    //1-11 Ternary, optional chaining & nullish coalescing operator

const age = 15;
const isAdult = age>= 18? "Adult": "not Adult";
//console.log({isAdult})

//Nullable

const searchName=(value:string | null)=>{
   if(value){
    console.log("Value earching..")
   }else{
    console.log('There is nothing to search')
   }
}
// searchName("Hello TS");
// searchName(null);
 
const getSpeedPerSec=(value:unknown)=>{
    if(typeof value === 'number'){
         const convertedSpeed= (value *1000) / 3600;
         console.log(`The speed is ${convertedSpeed} is ms^-1`);
    }

   else if(typeof value === 'string'){
        const[result,unit]= value.split(' ');
        const convertedSpeed= (parseFloat(result) *1000) / 3600;
         console.log(`The speed is ${convertedSpeed} is ms^-1`);
    }
    else{
        console.log('Null')
    }
};
//getSpeedPerSec('1000 ms^-1')

// never

function throwError(msg:string):never{
    throw new Error(msg);
}

throwError("make MIStek!");


}