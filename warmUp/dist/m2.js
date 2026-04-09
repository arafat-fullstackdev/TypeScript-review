"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // Type assertation
    let anyThing;
    anyThing = "Next Level Developer!";
    anyThing = 222;
    anyThing = true;
    anyThing;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertValue = parseFloat(value) * 1000;
            return ` The convert value is ${convertValue}`;
        }
        else if (typeof value === "number") {
            //  const convertValue= stringify(value);
            // return convertValue;
            return value * 1000;
        }
        else {
            console.log("Wrong input");
        }
    };
    const result = kgToGm("78");
    const result1 = kgToGm("23");
    const user1 = {
        name: "Hable Developer",
        salery: 12000,
    };
    const user2 = {
        name: "Gablue Developer",
        salery: 23000,
    };
    const greet = (name) => {
        return `Hello ${name}`;
    };
    greet.description = "A new World";
    console.log(greet("Alice"));
    console.log(greet.description);
    // const rollNum: number[]= [1,2,3,4,5];
    const rollNum = [1, 2, 3, 4, 5];
    // const mentors: string[]=["a","b","c"];
    const mentors = ["a", "b", "c"];
    // const boolArr: boolean[]=[true,false,true];
    const boolArr = [true, false, true];
    const DefineArr = [1, 2, 3];
    const addValue = (n, m) => n + m;
    addValue(4, 7);
    const adminUser = [
        {
            name: "Bob Wolmare",
            age: 100,
        },
        {
            name: "Don Jonson",
            age: 120,
        },
    ];
    const developerHub = ["devA", 10];
    const UserId = [
        12343,
        { name: "hubDev", email: "gmail@yahoo.com" },
    ];
    const internDev = [
        {
            name: "Dev man",
            role: "TS",
            sallery: 4
        }
    ];
}
//# sourceMappingURL=m2.js.map