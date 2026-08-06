let str="helloworld"
for(let i=1;i<=str.length-1;i++){
    if(i%2==0){

        console.log(str[i]);
    }
}

let str="aaabbcca"
let count=1;
let temp="";
console.log(countchar(str))
function countchar(s){
    for(let i=0;i<=s.length-1;i++){
        
        if(s[i]== s[i+1]){
            count++;
        }else{
            temp+=s[i]+count;
            count=1;
        }
    }
    return temp;

}


