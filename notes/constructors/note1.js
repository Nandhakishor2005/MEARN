function Student(id, name, age, course){
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;

}
Student.prototype.display =function(){
    console.log("hii")
}

const Student1= new Student(1, "arun",20, "mearn");
const Student2= new Student(2,"rahul",22,"python");

console.log(Student2)