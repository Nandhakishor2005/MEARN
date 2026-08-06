//find largest digit in a number

let n = 8753;
let value = n%10;
while(n>0){
    let large = n%10;
    if(large>value){
        value = large;
    }
    n = Math.floor(n/10);
}
console.log(value);