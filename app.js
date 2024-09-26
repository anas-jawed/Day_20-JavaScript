

//   This Keyword

// const student = {
//     name: "Anas",
//     age: 23,
//     eng: 97,
//     math: 87,
//     urdu: 98,
//     getAvg(){
//         let avg = (this.eng + this.math + this.urdu)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// student.getAvg();

//  try or catch



// console.log("hello world");
// console.log("hello world");
// try{
//     console.log(num1);

// } catch {
//     console.log("");
// }
// console.log("hello world");
// console.log("hello world");
// try{
//     console.log(num2);    
// } catch{
//     console.log("");
// }

// console.log("hello world");
// console.log("hello world");
 

// const sum = (a, b) => {console.log(a+b);};
// sum(2,3)


//  Arrow Functions

// const cube  = n => {
//     return n*n*n;
// };

// let result = cube(2);
// console.log(result);

// const power = (a ,b) => {
//     return a**b;
// }; 

// console.log(power(2, 4));

//  Arrow Functions
//  Implicit return

// const  mul = (a ,b) => a+b;


//  Set Timeout

// console.log("hi there");

// setTimeout( () =>{
//    console.log("Apna college");
// }, 4000);
// console.log("welcome to");


// let id = setInterval(() => {
//  console.log("Anas Jawaid");
// }, 2000);
// console.log(id);

// let id2 = setInterval(() => {
//    console.log("Jawaid ALi kamboh");
//   }, 4000);
//   console.log(id2);

//  This with arrow function

// const student = {
//   name: "Anas",
//   marks: 94,
//   prop: this,
//   getName: function(){
//    console.log(this)
//    return this.name;
//   },
//   getMarks: () =>{
//    return this.marks;
//   },
//   getInfo1: function(){
//    setTimeout(() => {
//       console.log(this);
//    }, 2000)
//   },
//   getInfo2: function(){
//    setTimeout(function(){
//       console.log(this)
//    }, 2000)
//   }
// };

// console.log(student);
// console.log(student.getName());
// console.log(student.getMarks());
