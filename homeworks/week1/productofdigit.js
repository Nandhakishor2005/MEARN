//Find product of digits

let n = 23;
let prod = 1;
while(n>0){
    let d = n%10;
    prod*=d;
    n=Math.floor(n/10);
}
console.log(prod);
