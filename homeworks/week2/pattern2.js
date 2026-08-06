let num=7;
for(i=1;i<=num;i++){
    let count=0;
    let pattern="";
    for(j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
        pattern =pattern+ "*"
    }
    if(count==2){
        console.log(pattern + "*")
    }
    else{
        console.log(pattern)
    }
}
