// Task 3: Rectangle Object

// Create an object
// length
// width

// Add methods
// area()
// perimeter()

// Example

// Area = 50
// Perimeter = 30

let rectangle = {
    length : 50,
    width : 30,

    area : function(length, width){
        console.log(this.length* this.width)
    },

    perimeter : function(length,width){
        console.log(2* (this.length + this.width))
    }
}
rectangle.area();


