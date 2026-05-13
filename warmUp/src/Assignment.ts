{
    //Task no 1
    type taskOne= string|boolean;

    const formatString=(value:string,toUpper?:boolean):string=>{
        if(toUpper === false){
          return  value.toLowerCase()
        }
        return value.toUpperCase();
    }
// console.log(formatString('Hello'));
// console.log(formatString('Hello',true));
// console.log(formatString('Hello',false)); 

//task 2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter((item)=>{
         return item.rating >= 3.6
    })
}

//instance
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book C", rating: 3.5 },
  { title: "Book C", rating: 5.0 },
];

const result = filterByRating(books);
//console.log(result)


// task no: 3

// task no: 3
// task no: 3
// task no: 3
// task no: 3
// task no: 3
}