"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let course = "Next Level Web Development";
console.log(course);
// Data type
let firstCode = 'C++ Code';
//number
let roll = 321;
//boolean
let isAdmin = true;
//null
let valueAssign = null;
//undefined
let undefinedV = undefined;
length;
//Check 
let d;
// d = 123;
// d= "str";
d = true;
//? Areray
let friends = ['Ro', 'go'];
let nombor = [2, 3, 4];
nombor[0] = 88;
//tuple
//array->order->-->type of value
let tupleValue = [32, '54'];
//* Reference type object
const user = {
    company: "Coding Master",
    firstName: "Demne",
    lastName: "Gregor"
};
//? Learning Function
//Normal function
function add(num1, num2) {
    return num1 + num2;
}
add(23, 44);
//Arrow function
const addArrow = (val1, val2) => val1 + val2;
addArrow(33, 44);
//object --> function --> method
const myBalence = {
    name: "Patwary",
    balance: 0,
    addBalance(balance) {
        return `My Balance ${this.balance + balance}`;
    }
};
const arr = [3, 4, 5];
const newArr = arr.map((elem) => elem * elem);
{
    // Spred operator
    const bros1 = ['Laltu', 'Maltu', 'Boltu'];
    const bros2 = ['Mukshes', 'Suresh', 'Romesh'];
    bros1.push(...bros2);
    const mentor1 = {
        typescript: 'Boris',
        redux: 'Paul',
        rdms: 'Emanual'
    };
    const mentor2 = {
        next: 'Udemy',
        docker: 'Coursera'
    };
    //destructure
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    console.log(mentorList);
    // rest operator
    const greetFriends = (...fn1) => {
        fn1.forEach((fn1) => console.log(`Hi${fn1}`));
        greetFriends("Abul", "kabul", "Babul");
    };
    // Destructure
}
//# sourceMappingURL=test.js.map