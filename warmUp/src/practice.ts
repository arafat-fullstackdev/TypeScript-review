{
  //Define interface
  type Veriable = {
    course: string;
  };
  type Veriable1 = string; // type Alieas

  //task 1
  let course: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";
  // console.log(course)
  let course1: Veriable1 = "Next Level Devloper";
  //console.log(course1);

  //task 2
  type User = (name: string, age: number, role: string) => string;

  const user1: User = (name: string, age: number, role: string) => {
    return `Task2 name:${name}age:${age}and role:${role}`;
  };
  console.log(user1("coder ", 22, " developer"));

  //Obj
  type User1 = {
    name: string;
    age: number;
    role: "admin" | "user" | "guest";
  };

  const userOne = (user: User1): string => {
    return `${user.name}${user.age}${user.role}`;
  };

  const getUserInfo: User1 = { name: "Developer ", age: 22, role: "admin" };

  //   console.log(userOne(getUserInfo))

  //Task 3: Object Types, Type Alias, & Literal Types
  type Person = {
    Name: string;
    Address: string;
    Hair: string;
    Eye: string;
    Income: number;
    Expense: number;
    Hobbies: ("Read" | "Run" | "Travel")[];
    FamilyMembers: number;
    Job: boolean;
    skills: ("Frontend Dev" | "Backend Dev" | "Full Stack Dev")[];
    MaritalStatus: boolean;
    Friends: string[];
  };

  const PersonInfo: Person = {
    Name: "Mr Khan",
    Address: "Comilla",
    Hair: "Black",
    Eye: "Black",
    Income: 20,
    Expense: 17,
    Hobbies: ["Travel", "Read"],
    FamilyMembers: 8,
    Job: true,
    skills: ["Full Stack Dev", "Backend Dev"],
    MaritalStatus: true,
    Friends: ["lalu", "kalu", "galu"],
  };
  // console.log(PersonInfo)
  //Task 4: Union and Intersection Types
  interface Book {
    title: string;
    author: string;
    relese: number;
  }

  interface Magazine {
    nameW: string;
    woner: string;
  }

  //union
  type ReadingMaterial = Book | Magazine;
  const myRead: ReadingMaterial = {
    title: "War and Peae",
    author: "Leo Toy Stoey",
    relese: 1866,
  };
  //Intersection
  type Publisher = Book & Magazine;
  const company: Publisher = {
    title: "Rokomari",
    author: "Rokib",
    relese: 2009,
    nameW: "Herk",
    woner: "mr KenkMan",
  };

  //console.log(company);

  // Task 5: Function Type

  type StringReturn= string;
 const reverseString=(str:StringReturn):StringReturn=>{
     return str.split('').reverse().join('')
 }
 const input:StringReturn = 'bank';
 const outPut:StringReturn= reverseString(input);
 console.log(outPut)
 reverseString('Hello')

}
