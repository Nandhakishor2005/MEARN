//Print the words that start with a vowel.

let str="orld glcome wwww ee rrjbb aa eee";
let upper= str.toUpperCase()
let space="";
for(let i=0;i<upper.length;i++){
    if(upper[i]!=" "){
        space+=upper[i];
    }
    else{
        if(space[0]=="A" || space[0]=="E" || space[0]=="I" || space[0]=="O" || space[0]=="U"){
         console.log(`${space} is vowel`)
        }
            space="";


    }
    
}
 if(space[0]=="A" || space[0]=="E" || space[0]=="I" || space[0]=="O" || space[0]=="U"){
         console.log(`${space} is vowel`)
        }