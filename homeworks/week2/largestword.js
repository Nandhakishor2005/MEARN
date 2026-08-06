//8.Find the largest word in a sentence.

let str= "hello world welcome to javascript";
let space= "";
let lar="";
for(let i=0;i<=str.length;i++){
    if(str[i]!==" " && i !==str.length){
        space+=str[i];
    }
    else{
        if(space.length > lar.length){
            lar=space;
        }
        space="";
    }
}
console.log("largest word is ",lar)