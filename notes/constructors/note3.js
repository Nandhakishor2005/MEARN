// Task 2: Employee Details
// Create an Employee constructor with properties:

// id
// name
// department
// salary
// Create two employee objects and print their details

function Employee(id, name, department, salary){
    this.id=id;
    this.name=name;
    this.department=department;
    this.salary=salary;
}
Employee.prototype.display = function(){
    console.log(`${this.id},${this.name},${this.department},${this.salary}`)
}


let employee1= new Employee(1,"jithu","MERN",30000);
let employee2= new Employee(2,"Prabin","Python",32000);

employee1.display();
