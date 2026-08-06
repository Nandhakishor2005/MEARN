//print sum of even digits in a number

let n = 1234;
let sum = 0;
while(n>0){
    let d = n%10;
    if(d%2==0){
        sum+=d;
    }
    n=Math.floor(n/10);
}
console.log(sum);