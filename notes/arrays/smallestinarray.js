let A=[1,3,5,7];
let small=A[0];
for(let i=0;i<A.length;i++){
    
    if(A[i]<small){
        small=A[i];
    }
}
console.log(small)