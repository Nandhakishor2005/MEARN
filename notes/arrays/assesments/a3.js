// 2.A teacher has stored marks of 5 subjects in an array.
// Write a function to:
// Calculate the total marks.
// Calculate the average.
// Print the grade using the following conditions:
// 90+  → Grade A
// 75+  → Grade B
// 50+  → Grade C
// Below 50 → Fail

let arr=[25,55,96,80,66];
subject(arr)
function subject(A){
    let temp=0;
    for(let i=0;i<A.length;i++){
        temp+=A[i];
    }
    console.log("total marks is :",temp)


    let avg=temp/A.length;
    console.log("average is :",avg)

    for(let i=0;i<A.length;i++){
        if(A[i]>=90){
            console.log("GRADE A")
        }else if(A[i]>=75){
            console.log("GRADE B")
        }else if(A[i]>=50){
            console.log("GRADE C")
        }else{
            console.log("FAIL")
        }
    }
}
