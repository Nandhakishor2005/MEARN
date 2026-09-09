// Q10. Create a Car class. Each car should have brand and model.
// Create:
// const car1 = new Car("Toyota", "Innova");
// Display:
// Toyota
// Innova

class Car {
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }
    display(){
        console.log(`brand : ${this.brand} model : ${this.model}`)
    }
}
let car1 = new Car ("toyota","innova")
car1.display()