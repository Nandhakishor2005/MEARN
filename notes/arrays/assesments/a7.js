// Merge two arrays.

let a1=[1,2,3,4,5];
let a2=[2,4,6,8,10];

let temp=[];
let count=0;

for(let i=0;i<a1.length;i++){
    temp[count]=a1[i];
    count++;
}
for(let j=0;j<a2.length;j++){
    temp[count]=a2[j];
    count++;
}
console.log(temp);