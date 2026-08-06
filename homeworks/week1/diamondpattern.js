let n = 4;
for(let i=1;i<=n;i++){
    let r = "";
    r+=" ".repeat(n-i);
    for(let j=1;j<=i;j++){
        r+="* ";
    }
    console.log(r);
}
for(let i=3;i>=1;i--){
    let r = "";
    r+=" ".repeat(n-i);
    for(let j=1;j<=i;j++){
        r+="* ";
    }
    console.log(r);
}
