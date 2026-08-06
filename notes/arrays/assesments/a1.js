//Remove duplicate elements.

let arr=[2,4,6,6,8,8];
let empty=[];

for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            empty=arr[j]
            
        }
    }
}
console.log(empty)