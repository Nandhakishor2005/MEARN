//Check whether a number ends with 0

let num = 190;
let a;
if(num==0){
    console.log(" it is zero");
}
else if(num!=0){
     a = num%10;
    if(a==0){
        console.log("Ends with 0");
    }
    else{
        console.log("doesn't end with 0");
    }
}