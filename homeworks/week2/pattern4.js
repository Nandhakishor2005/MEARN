let num=7;
for(let i=1;i<=num;i++){
    let ps=Math.sqrt(i);
    if(Number.isInteger(ps)){
            console.log("*".repeat(i*2))
    }
    else{
        console.log("*".repeat(i))
    }
}