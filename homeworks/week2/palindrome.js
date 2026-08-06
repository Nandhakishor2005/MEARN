//Check whether a string is palindrome.

let str="nayan"
let rev= "";
for(i=str.length-1;i>-1;i--){
    
    rev=rev+str[i];
}
//console.log(rev)
if(rev==str){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}
