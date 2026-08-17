// Task 2: Calculator Object

// Create an object called calculator.
// Add methods

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

// Sample
// calculator.add(10,5)
// Output:
// 15

let calculator = {

    add : function(a,b){
        console.log(a+b);
    },

    subtract : function(a,b){
        console.log(a-b)
    },

    multiply : function(a,b){
        console.log(a*b)
    },

    div : function(a,b){
        console.log(a/b)
    }
}
calculator.subtract(10,5);
