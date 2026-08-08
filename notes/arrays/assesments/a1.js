//Remove duplicate elements.

let arr=[2,4,6,6,8,8];
let empty=[];

for(let i=0;i<arr.length;i++){
    let duplicate= false;
    for(let j=0;j<arr.length;j++){
        if(arr[i]==empty[j]){
            duplicate=true;
            break;
        }

    }if(duplicate==false){
        empty.push(arr[i])
    }
}
console.log(empty);