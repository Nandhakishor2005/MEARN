// 6.create an object, print all the property names using a loop.

let obj ={
    name : "Arun",
    class : 12,
    subject : "english",
    mark : 45
}

for(let key in obj){
    console.log(obj[key])
}

// 7.Print only the values using loop

// for(let key in obj){
//     console.log(obj[])
// }

// 8.Find how many properties an object contains

let count=0;
for(let key in obj){
    count++;
}
console.log(count)

