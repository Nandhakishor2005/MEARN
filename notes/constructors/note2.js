// Task 1: Student Details
// Create a constructor called Student with properties:

// id
// name
// age
// course
// Create two student objects and display all their details.

function Student(id, name, age, course){
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
}

let student1= new Student(1,"jithu",26,"MERN");
let student2= new Student(2,"Prabin",20,"MEARN");

console.log(student1)
console.log(student2)