{

// constraints
const studentCourse = <T extends {id:number,name:string,email:string}>(student: T) => {
    const course = "AWS";
    return {
      ...student,
      course,
    };
  };

  const student1 = studentCourse({
    name: "Neil",
    id: 63,
    email: "neil@yahoo.com",
  });
  const student2 = studentCourse({
    name: "Neil",
    id: 503,
    email: "neil@yahoo.com",
    devTYpe: "NLWD",
  });

  const student3 = studentCourse({
    id:5678,
    name: 'mr. h',
    email: 'xc@gmailail.com'
})

// Generic constraints key of
type Vehicle={
    bike: string;
    car:string;
    ship:string;
}

type Owner= "bike"|"car"|"ship";
type Owner2= keyof Vehicle;

const person:Owner2="bike" 

const getPersonInfo=<A,B extends keyof A>(obj:A,key:B)=>{
 return obj[key];
}

const userInfo={
    name:'Sibham',
    age:'44',
    city:'cml'
}

const car={
    model:'Toyota',
    year:'2344',
    
}

 const res= getPersonInfo(car,'model')



}