// 3.Double every element of an array.  

let arr=[1,2,3,4,5];
let temp=[]
let count=0;
for(let i=0;i<arr.length;i++){
    temp[count]=arr[i]*2
    count++;
}
console.log(temp)