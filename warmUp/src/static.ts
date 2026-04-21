{
class Counter{
     static count:number=0;

    static increment(){
        return (Counter.count= Counter.count+1)
    }
   static decrement(){
        return (Counter.count = Counter.count-1)
    }


}

const Instance1= new Counter();
const Instance2= new Counter();

const Instance3 = new Counter()

console.log(Counter.increment())
// console.log(Instance1.increment())

console.log(Counter.increment())
// console.log(Instance2.increment())
// console.log(Instance2.increment())

console.log(Counter.decrement())
// console.table()
// console.time()
// console.warn("This is a warning message.");
// console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');
// // console.table([{name: "Amit", age: 30}, {name: "Jatin", age: 25}]); 
// console.time('timer1');
// function loops() {
//     for (let i = 0; i <= 10000; i++) {

//     }
// }
// loops()
// console.timeEnd('timer1');
// console.assert(5 > 10, "This assertion failed");

// console.group('User Information');
// console.log('Name: Ritik');
// console.log('Age: 30');
// console.groupEnd();

// console.count("countLabel");  
// console.count("countLabel"); 
// console.count("countLabel");
// console.count("countLabel");

// function a() {
//     b()
// }
// function b() {
//     c()
// }
// function c() {
//     console.trace()
// }
// a()
}