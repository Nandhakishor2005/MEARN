// Task 5: Employee Object
// Properties
// ->name
// ->salary
// Method
// ->increment(percent)

// Example
// Salary = 30000
// increment(10)

// Output
// 33000

let employee = {
    Name : "Nandhakishor",
    salary : 30000,

    increment : function(percent){

        let c= this.salary*(percent/100)
        console.log(this.salary+c)
    }
}
employee.increment(10)