//find smallest digit in a number
let n = 8753;
let value = n%10;
while(n>0){
    let small = n%10;
    if(small<value){
        value = small;
    }
    n = Math.floor(n/10);
}
console.log(value);
