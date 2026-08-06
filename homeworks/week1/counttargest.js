//Count target 

let n = 2312;
let t = 2;
let c = 0;
while(n>0){
    let se = n%10;
    if(se==t){
        c++;
    }
    n = Math.floor(n/10);
}
console.log(c);