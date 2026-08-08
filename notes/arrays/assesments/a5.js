// Find common elements in two arrays.

let A1=[1,2,3,4,5,6];
let A2=[2,4,6,6,8,10];
let temp=[];
let common;
for(let i=0,j=0;i<A1.length,j<A2.length;i++,j++){
    for(let j=0;j<A2.length;i++){

    if(A1[i]==A2[j]){

        common=A1[i];
        temp.push(common);
    }
    }
}
console.log(common);