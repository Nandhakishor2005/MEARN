// 2.Replace every negative number with 0.  

let arr=[1,2,4,5,-6,-7,-8,11,10];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        arr[i]=0;
    }
}
console.log(arr)