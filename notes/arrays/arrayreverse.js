let A=[1,2,3,4,5,6,7,8];
let arr=[];
let temp=0;
for(let i=A.length-1;i>=0;i--){
    arr[temp]=A[i]
    temp++;
}
console.log(arr)