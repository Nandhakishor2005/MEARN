// 1.Create a new array containing only the even numbers from an existing array.  

let arr=[1,2,4,5,6,7,8,11,10];
let even=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        //even=arr[i];
        even.push(arr[i])
    }
}
console.log(even)