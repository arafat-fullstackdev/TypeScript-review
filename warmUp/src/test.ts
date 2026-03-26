let course:String = "Next Level Web Development"
console.log(course)

// Data type
let firstCode: string = 'C++ Code'
//number
let roll: number = 321
//boolean
let isAdmin: boolean = true;
//null
let valueAssign: null = null;
//undefined

let undefinedV:undefined = undefined;length
//Check 
let d:boolean;
// d = 123;
// d= "str";
d= true;

//? Areray
let friends: string[]= ['Ro','go']
let nombor: number[]= [2,3,4];
nombor[0]= 88;

//tuple
//array->order->-->type of value
let tupleValue:[number,string]=[32,'54']

//* Reference type object

const user:{
    company: "Coding Master";   //type--? behave as "literals type"
    firstName: string;
    middleName?: string;  //optional
    lastName: string;

}={
    company: "Coding Master",
    firstName:"Demne",
    
    lastName: "Gregor"
}

//? Learning Function
//Normal function

function add(num1:number,num2:number):number{
    return num1 + num2;
}
add(23,44);

//Arrow function

const addArrow=(val1:number,val2:number):number => val1 + val2
addArrow(33,44);

//object --> function --> method

const myBalence ={
    name: "Patwary",
    balance: 0,

    addBalance(balance:number):string{
        return `My Balance ${this.balance +balance}`;
    }
}

const arr:number[]=[3,4,5];
const newArr:number[]= arr.map((elem:number):number => elem *elem)

{
    // Spred operator

    const bros1: string[]= ['Laltu','Maltu','Boltu'];
    const bros2: string[]= ['Mukshes','Suresh','Romesh'];
    bros1.push(...bros2);

    const mentor1={
        typescript: 'Boris',
        redux: 'Paul',
        rdms:'Emanual'
    }
    const mentor2={
        next: 'Udemy',
        docker:'Coursera'
    }


    //destructure
    const mentorList={
        ...mentor1,
        ...mentor2
    }

    console.log(mentorList)

    // rest operator

    const greetFriends=(...fn1:string[])=>{

    fn1.forEach((fn1:string) =>console.log(`Hi${fn1}`))
    greetFriends("Abul","kabul","Babul");

    };
    
    // Destructure
}