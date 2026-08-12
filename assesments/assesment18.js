// Q1. (5 marks) Create an array let numbers = [5, 12, 8, 20, 3] Write a function findMax(arr) that takes an array as a parameter and returns the largest value using a loop (do not use Math.max).

let numbers=[1,2,3,4,5]
console.log(length(numbers))
function length(arr){
    let lar= arr[0];
    for(let i=0;i<arr.length;i++){
            if(arr[i]>lar){
                lar=arr[i]
            }
        }
        return lar
}
