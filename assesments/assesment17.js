// 5.Remove all negative numbers from an array.


let arr=[1,2,4,5,-6,-7,-8,11,10];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        
        arr.splice(i,1)
        i--;
    }
}
console.log(arr)