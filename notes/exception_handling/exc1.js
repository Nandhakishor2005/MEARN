try{console.log("program started")
console.log(a)
}

catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    
}
finally{
    console.log("program ended")
    
}

let age = 15;
try{
    if(age<18){
        throw ("you are not eligible to vote");
    }
}
catch(error){
    console.log(error)
}