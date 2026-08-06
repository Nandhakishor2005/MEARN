let A=[1,2,3,4,5,6,7,8];
let search=5;
let flag;

for(let i=0;i<A.length;i++){
    if(A[i]==search){
        flag=true;
    }
}
if(flag==true){
    console.log(" Element is found")
}else{
    console.log("element not found ")
}