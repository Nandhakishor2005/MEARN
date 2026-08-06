//q12 .Print the words whose length is greater than 5.


let str="orld glcome5555 wwww ee rrjbb aa eee";
let upper= str.toUpperCase()
let space="";
for(let i=0;i<upper.length;i++){
    if(upper[i]!=" "){
        space+=upper[i];
    }
    else{
        if(space.length>5){
         console.log(`${space}`)
        }
            space="";
    }  
}
 if(space.length>5){
         console.log(`${space}`)
        }
