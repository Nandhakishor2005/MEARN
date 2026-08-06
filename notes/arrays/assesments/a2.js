//1.A classroom attendance is stored as

// "PPAAPPPAPPA"

// where

// P → Present
// A → Absent

// Write a program to count
// Total Present
// Total Absent

let str="PPAAPPPAPPA";
let lower = str.toLowerCase();
let arr = lower.split("");
let present=0;
let absent=0;
for(let value of arr){
    if(value == "p"){
        present++;
    } else if(value == "a"){
        absent++;
    }
} 
console.log(present)
console.log(absent)


