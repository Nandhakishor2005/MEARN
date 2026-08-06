// functions

// 1. To check a number is palindrome or not 

// function palindrome(string){
//      let rev="";
//      for(let i=string.length-1;i>-1;i--){
//         rev=rev+string[i];
//      }
//      if(rev==string){
//         console.log("palindrome")
//      }
//      else{
//         console.log("not palindrome")
//      }
// }

// let str="nayan"
// palindrome(str)


// 2. To check a number is armstrong or not 

// let n=153;
// palindrome(n);

// function palindrome(num){
// let count=0;
// let r=0;
// let sqr;
// let sum=0;
// let temp=num;
// while(num>0){
//      if(num>0){
//          count++;

//     }
//     num=Math.floor(num/10);

//  }
//  //console.log(count)
//  num=temp;
// while(num>0){
//     r=num%10;
//     sqr=r**count;
//     sum=sum+sqr;
//     num=Math.floor(num/10);
// }
// if(sum==temp){
//         console.log("amstrong")
//     }
//     else{
//         console.log("not anstrong")
//     }
// }

// 3. To print prime numbers upto n

// function prime(num){
//     for(i=2;i<=num;i++){
//         let count=0;
//         for(j=1;j<=i;j++){
//             if(i%j==0){
//                 count++;
//             }
//         }
//         if(count==2){
//             console.log(i)
//         }
//     }
    
    
// }
// let n=20;
// prime(n);

// 4. To print first n prime numbers


// 5. To find the factorial of a number

// let num=5;
// factorial(num)
// function factorial(n){
//     let f=1;
//     for(let i=1;i<=n;i++){
//         f=f*i;
//     }
//     console.log(f)
// }

// 6. To find largest of three numbers

// let num1= 10;
//     num2=20;
//     num3=30;
// largest(num1,num2,num3)
// function largest(n1,n2,n3){

//       if(n1>n2){
//         if(n1>n3){
//             console.log(n1, "is largest")
//         }
//       }
//       else{
//         if(n2>n3){
//             console.log(n2, "is largest")
//         }
//         else{
//             console.log(n3,"is largest")
//         }
//       }
// }

//  7. Write a program to calculate area of rectangle,circle and square using functions

// let length=10;
//     width=30;
// let side=25;
// let radius=7;

// square(side)
// function square(s){
//     result=s*s;
//     console.log("area of square is", result)

// }

// rectangle(length,width)
// function rectangle(l,b){
//     area=l*b;
//     console.log("area of rectangle is",area)
// }

// console.log(circle(radius))
// function circle(r){
//    sq=3.14*r*r;
//    return sq;
// }


