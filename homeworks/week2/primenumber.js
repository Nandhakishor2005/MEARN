//To print prime numbers upto n

let num=20;
for(i=2;i<=num;i++){
    let count=0;
    for(j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(i)
    }
}

