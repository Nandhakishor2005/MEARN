// 1.create a student Object with following properties
//     ->name,age,city
// and print all the values

let studentobj = {
    name : "Nandhakishor",
    age  : 19,
    city : "kottayam"
}
console.log(studentobj)

// 3.Add a new property called course  in the student object with the value "MERN".

studentobj.course="MEARN"
console.log(studentobj)

// 4.Update the age of a student from 20 to 21.

studentobj.age=20;
console.log(studentobj)

// 5.Remove the city property from the object.

delete studentobj.city;
console.log(studentobj)

console.log(Object.values(studentobj).length)