let A=[12,45000,450];
let large=A[0];
let secondlarge=0;
for(let i=0;i<A.length;i++){
    if(A[i]>large){
        large=A[i];
    }
}
for(let i=0;i<A.length;i++){
    if(A[i]>secondlarge && A[i]<large){
        secondlarge=A[i]
    }
}
console.log(secondlarge)