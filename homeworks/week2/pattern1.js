let num=7;
for(i=1;i<=num;i++){
    let space="";
    let star;
    
    if(i==1 || i==2){

        star=2;
    }
    else if(i%2==0){
        star=i;
        
        
    }
    else{
        star=i*2;
    }
    for(j=1;j<=star;j++){
        space+= "*"
    }
    console.log(space)
}