// Q11 — Challenge. Create a Person class with name, age, and a greet() method.
// For:
// const p1 = new Person("Nandhu", 22);
// p1.greet();
// should print:
// Hello, my name is Nandhu and I am 22 years old.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and Iam ${this.age} years old.`)
    }
}
let p1 = new Person("Nandhakishor",22);
p1.greet();