// 5. Create a base class Vehicle with:
//  - Properties: make, model, year, color
//  - Method: start() - "Vehicle is starting"
//  - Method: stop() - "Vehicle is stopping"
//  - Method: displayInfo() - shows all details

//  Create two subclasses:
//  1. Car extends Vehicle with:
//     - Additional property: numDoors
//     - Override start(): "Car engine is starting"
//     - New method: honk() - "Car is honking"
//     - New method: openTrunk() - "Trunk opened"

//  2. Motorcycle extends Vehicle with:
//     - Additional property: hasSideCar (boolean)
//     - Override displayInfo(): includes sidecar info
//     - New method: wheelie() - "Doing a wheelie!"

//  Create instances and demonstrate all methods

class vehicle{
    constructor(make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    start(){
        console.log("vroom vroomm")
    }
    stop(){
        console.log("vehicle stopped")
    }
}

class car extends vehicle{

    constructor(numDoors){
        this.numDoors = numDoors;
    }
    start(){
        console.log("car engine is starting")
    }

    honk(){
        console.log("car is honking")
    }

    openTrunk(){
        console.log("Trunk opened")
    }

}

class motorcycle extends vehicle{
    
} 
