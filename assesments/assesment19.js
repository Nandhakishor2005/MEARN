// Q2. (5 marks) Write a function sumArray(arr) that accepts an array of
// numbers and returns their total sum using return. Call it with [10, 20,
// 30, 40] and print the result.

let arr=[10, 20, 30, 40]
console.log(sumarray(arr))
function sumarray(a){
    let sum=0;
    for(let i=0;i<a.length;i++){
            sum+=a[i]
            
    }
    return sum
}