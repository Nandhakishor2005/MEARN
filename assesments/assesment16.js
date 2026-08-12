// 4.Move all zeroes to the end of an array.  

let arr=[1,2,0,0,4,5,0,8];
let j=0;
let temp;
for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            temp++;
            
        }
}
console.log(arr)




