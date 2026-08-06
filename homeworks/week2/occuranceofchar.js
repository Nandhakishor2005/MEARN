//6.Count occurrence of a character.

let str="hello"
let char="h";
let count=0;
for(i=0;i<str.length;i++){
    
    if(char==str[i]){
        count++;
    }
   
}
console.log(count)