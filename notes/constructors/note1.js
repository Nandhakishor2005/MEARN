function Student(id, name, age, course){  // constructor

    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
}
Student.prototype.display =function(){
    console.log("hii")
}

const Student1= new Student(1, "arun",20, "mearn"); // object
const Student2= new Student(2,"rahul",22,"python");

console.log(Student2)
console.log(Student.prototype);
console.log(Student1.__proto__)
Student1.display();