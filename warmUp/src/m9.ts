{
   // Type guard

   //typeof--> ts guard   [working on Runtime]

//    type AlphaNumeric =string|number
// const add=(param1:AlphaNumeric,param2:AlphaNumeric):string|number=>{
    
// if(typeof param1 === 'number' && typeof param2 ==='number'){
//     return param1 + param2;

// }else{
//     return param1.toString() + param2.toString()
// }
// }

// console.log(add('66',99)) 

//Type IN

type ClientUser={
    name:string;
}
type AdminUser={
    name:string;
    role:"admin";
}

const getUser=(user: ClientUser|AdminUser)=>{
    
    if('role' in user){
        
        console.log(`my name is ${user.name} and role${user.role}`)
    }else{
        console.log(`client name${user.name}`)
    }

}

const normalUser:ClientUser={
        name: "Mr Normal Bahi",
    }
        const bossUser:AdminUser={
        name: "Mr bosss Bahi ",
        role:"admin"
    }
getUser(bossUser)




}