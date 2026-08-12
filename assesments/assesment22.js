// Q5. (5 marks) Write a function isEven(num) that returns true if the
// number is even and false if odd. Then use a for loop with arr =
// [1,2,3,4,5,6] to call isEven() on each element and print only the even
// numbers.

let arr=[1,2,3,4,5,6]

function iseven(num){
    return num%2==0;
}
for(let i=0;i<arr.length;i++){
    if(iseven(arr[i])){
        console.log(arr[i]);
    }
}

