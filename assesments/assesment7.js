// // // printing number pattern

// // let a="";

// // for(let i=1;i<=4;i++){
// //     for(let j=i;j<=i;j++){
// //          console.log(a+=j);
// //     }
// // }

// // let num=10;
// // let count=0;
// // while(num>0){
// //     count++;
// //     num=Math.floor(num/10);
    
// // }
// // console.log(count);

// //2

// // let num=120020020;
// // let count=0;
// // while(num>0){
// //     if(num%10==0){
// //         count++;

// //     }
// //     num=Math.floor(num/10);

// // }
// // console.log(count);

// //3
// // let num=222222;
// // let count=0;
// // while(num>0){
// //      if(num%2==0){
// //          count++;

// //     }
// //     num=Math.floor(num/10);

// //  }
// //  console.log(count);

// // 4

// // let num=123;
// // let r;
// // while(num>0){
// //     r=num%10;
// //     r=num+r;

// // }
// // console.log(r);


// // q1  print multiplication table of a number
// // let num=5
// // for(i=1;i<=10;i++){
    
// //        console.log(i,"*",num, "=", num*i)
    
// // }

// // q2 find factorial of a number

// // let n=5;
// // let f=1;
// // for(i=1;i<=n;i++){
// //     f=f*i;
// // }
// // console.log(f);

// //q3 pattern printing  * ** *** **** ***** downwards

// // let n=5;
// // let a="";
// // for( let i=1;i<=n;i++){
// //     console.log("")
// //     for( let j=i;j<=i;j++){
// //         console.log(a+="*")
// //     }
// // }

// //q3 - 2

// // let n=5;
// // let pattern;
// // for( let i=1;i<=n;i++){
// //     pattern="";
// //     for( let j=n;j>=i;j--){
// //         pattern =pattern+"*"
// //     }
// //     console.log(pattern)
// // }


// // q2 -3
// // let n=5;
// //  let a="";
// //  for( let i=1;i<=n;i++){
// //      for( let j=i;j<=i;j++){
// //          console.log(a+="*")
// //      }
// //  }
// //  let pattern;
// //  for( let i=1;i<=n;i++){
// //     pattern="";
// //     for( let j=n;j>i;j--){
// //         pattern =pattern+"*"
// //     }
// //     console.log(pattern)
// // }

// //q5

// num=153;
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
//         console.log(" amstrong ")
//     }
//     else{
//         console.log(" not anstrong ") 
//     }

//  q6 palindrome

//  let num = 101;
//  let temp = num;
//  let r = 0;
//  while(temp > 0){
//      r = r * 10 + temp % 10;
//      temp = Math.floor(temp/10);
// // } if(r == num){
// //     console.log("Palindrome");
// // } else {
// //     console.log("Not palindrome");
// // }

//  q7 perfect number or not

// // check a number is perfect or not

// // let num = 2;
// // let sum = 0;
// // for (let i =1; i<num; i++){
// //     if(num%i==0){
// //         sum+=i;
// //     }
// // }
// // if(sum == num){
// //     console.log("Perfect number");
// // } else {
// //     console.log("Not perfect number");
// // }

// q8 check a number is prime number or not 

// // let num = 3;
// // let count = 0;
// // for(let i=1;i<=num; i++){
// //     if(num%i==0){
// //         count++;
// //     }
// // }
// // if(count == 2){
// //     console.log("Prime");
// // } else {
// //     console.log("Composite");
// // }

// //  q9 Pyramid pattern
// // Pattern 4

// // let n = 4;
// // for(let i=1;i<=n;i++){
// //     let r = "";
// //     r+=" ".repeat(n-i);
// //     for(let j=1;j<=i;j++){
// //         r+="* ";
// //     }
// //     console.log(r);
// // }

// // q10 Print each character of a string on a new line.

// // let s1='number';
// // for( let i=0;i<s1.length;i++){
// //     console.log(s1[i])
// // }

// // q11 Count the number of characters without using length

// // let str="hello"
// // let count=0;
// // for(let i=0;str[i]!==undefined;i++){
// //     count++;
// // }
// // console.log(count);



// // q12 .Print the words whose length is greater than 5.


// // let str="orld glcome5555 wwww ee rrjbb aa eee";
// // let upper= str.toUpperCase()
// // let space="";
// // for(let i=0;i<upper.length;i++){
// //     if(upper[i]!=" "){
// //         space+=upper[i];
// //     }
// //     else{
// //         if(space.length>5){
// //          console.log(`${space}`)
// //         }
// //             space="";
// //     }  
// // }
// //  if(space.length>5){
// //          console.log(`${space}`)
// //         }


// // Count target 

// // let n = 2312;
// // let t = 2;
// // let c = 0;
// // while(n>0){
// //     let se = n%10;
// //     if(se==t){
// //         c++;
// //     }
// //     n = Math.floor(n/10);
// // }
// // console.log(c);

// //print sum of even digits in a number

// // let n = 1234;
// // let sum = 0;
// // while(n>0){
// //     let d = n%10;
// //     if(d%2==0){
// //         sum+=d;
// //     }
// //     n=Math.floor(n/10);
// // }
// // console.log(sum);

// // Print all factors of a number
// // let n = 28;
// // for(let i=1;i<=n;i++){
// //     if(n%i==0){
// //         console.log(i);
// //     }
// // }



// // Find product of digits
// // let n = 23;
// // let prod = 1;
// // while(n>0){
// //     let d = n%10;
// //     prod*=d;
// //     n=Math.floor(n/10);
// // }
// // console.log(prod);



// // find largest digit in a number
// // let n = 8753;
// // let value = n%10;
// // while(n>0){
// //     let large = n%10;
// //     if(large>value){
// //         value = large;
// //     }
// //     n = Math.floor(n/10);
// // }
// // console.log(value);


// // Check whether a number ends with 0

// // let num = 190;
// // let a;
// // if(num==0){
// //     console.log(" it is zero");
// // }
// // else if(num!=0){
// //      a = num%10;
// //     if(a==0){
// //         console.log("Ends with 0");
// //     }
// //     else{
// //         console.log("doesn't end with 0");
// //     }
// // }

// // //find smallest digit in a number
// // let n = 8753;
// // let value = n%10;
// // while(n>0){
// //     let small = n%10;
// //     if(small<value){
// //         value = small;
// //     }
// //     n = Math.floor(n/10);
// // }
// // console.log(value);


// //Print the words that start with a vowel.

// let str="orld glcome wwww ee rrjbb aa eee";
// let upper= str.toUpperCase()
// let space="";
// for(let i=0;i<upper.length;i++){
//     if(upper[i]!=" "){
//         space+=upper[i];
//     }
//     else{
//         if(space[0]=="A" || space[0]=="E" || space[0]=="I" || space[0]=="O" || space[0]=="U"){
//          console.log(`${space} is vowel`)
//         }
//             space="";


//     }
    
// }
//  if(space[0]=="A" || space[0]=="E" || space[0]=="I" || space[0]=="O" || space[0]=="U"){
//          console.log(`${space} is vowel`)
//         }


