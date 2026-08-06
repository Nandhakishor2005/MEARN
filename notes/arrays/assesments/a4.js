//3.A supermarket stores item prices in an array.

// [150,250,100,300,200]

// Write a function to
// Find the total bill.
// Find the highest-priced item.
// Find the lowest-priced item.


let arr=[150,250,100,300,200];

supermarket(arr)
function supermarket(A){
    let temp=0;
    for(let i=0;i<A.length;i++){
        temp+=A[i]
    }
    console.log("Total Bill s : ",temp)

    let high=A[0];
    for(let i=0;i<A.length;i++){
        if(A[i]>high){
            high=A[i]
        }
    }
    console.log("highest-priced item is :",high)

    let low=A[0];
    for(let i=0;i<A.length;i++){
        if(A[i]<low){
            low=A[i]
        }
    }
    console.log("lowest-priced item is :",low)

}