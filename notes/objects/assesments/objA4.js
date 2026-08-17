// Task 1: Student Details

// Create an object named student with the following:
// name
// age
// course
// Add a function display() that prints:

// Name: John
// Age: 20
// Course: MERN Stack

let student ={
    name : "John",
    age: 20,
    course : "MEARN STACK",
    
    display : function(){
        for(let value in student){
            if(typeof(student[value])!=="function"){
                console.log(value , " : ", student[value]);
            }
            
        }
    }

}
student.display();