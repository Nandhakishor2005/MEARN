// // aassesment 4

// //q1

// let a=10;
// let b=20;
// let c=30;

// if(a>b){
//     if(a>c){
//         console.log("a is largest");
//     }
//     else{
//         console.log("c is largest");
//     }
// }
// else if(b>c){
//     console.log("b is largest");
// }
// else{
//     console.log("c is largest");
// }

//q2

// let time="9.11";
// let t=Number(time)

// if(time>=12.00 && time<=23.59){
//     console.log("pm");
// }
// else{
//     console.log("am");
// }

// q3

// let a=10 ;
// let b=10
// let c=10;

// if(a==b && b==c){
//     console.log("equilateral");
// }
// else if(a==b || b==c || c==a){
//     console.log("iso");
// }
// else{
//     console.log("different");
// }

// q4
// let a=30;

// if(a%3==0 && a%5==0){
//     console.log("fizzbuzz");
// }
// else if(a%3==0){
//     console.log("fizz");
// }
// else if(a%5==0){
//     console.log("buzz");
// }

//q5

let num=101;
if(num>0 && num<=100){
    if(num%5==0){
        console.log("correct");
    }
    else{
        console.log("not correct");
    }
}
else{
    console.log("not in the limit");
}

// q6

let x=5;
let y=2;

if(x>0 && y>0){
    console.log("both are positive");
    if(x>y){
        console.log("x is largest");
    }
    else{
        console.log("y is largest");
    }
    
}
else if(x==0||y==0){
    console.log("its zero");
}
else{
    console.log("negative");
}

q7

let uname="admin"
let password="password"

let name="admin"
let pass="password"

if(uname==name){
    if(password==pass){
        console.log("sucess");
    }
    else{
        console.log("wrong password");
    }
}
else{
    console.log("wrong username");
}

q8

let monthnum=2;
let yr=2021;
switch(monthnum){
    case 1 :
        console.log("january 31 days");
        break;
    case 2 :
        if(yr%4==0){
            console.log("februay 29 days")
        }
        else {
            console.log("februay 28 days")
        }
        break;
    case 3 :
        console.log("march 31 days");
        break;
    case 4 :
        console.log("april 30 days");
        break;
    case 5 :
        console.log("may 31 days");
        break;
    case 6 :
        console.log("june 30 days");
        break;
    case 7 :
        console.log("july 31 days");
        break;
    case 8 :
        console.log("august 30 days");
        break;
    case 9 :
        console.log("september 31 days");
        break;
    case 10 :
        console.log("october 30 days");
        break;
    case 11 :
        console.log("november 31 days");
        break;
    case 12 : console.log("december 30 days");
        break;

}




