class student {
    constructor(name,age,dep){
        this.name = name;
        this.age = age;
        this.dep = dep;
    }
    display(){
        console.log(`student name : ${this.name} student age : ${this.age} student Department : ${this.dep}`)
    }
}

let obj = new student("arun",22,"computer science");
obj.display();