class Car{
    constructor(name,color,cost){
        this.name = name;
        this.color = color;
        this.cost = cost;
    }
    display(){
        console.log(`name : ${this.name}`)
            console.log(`name : ${this.color}`)
            console.log(`name : ${this.cost}`)

    }
    static showData(){
        console.log("hello")
    }
}

let obj1 = new Car("bmw", "white", 12000000);
let obj2 = new Car("fronx","black",220000)
Car.showData()

//obj1.display();
obj2.display();