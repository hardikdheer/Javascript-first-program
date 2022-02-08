//variable declaration
var a=10;
 console.log(a);
 console.log(typeof a);

  a="Hardik";
 console.log(a);
 console.log(typeof a);

  a= true;
  console.log(a);
 console.log(typeof a);

 a=null;
 console.log(a);
 console.log(typeof a);

 var b="Hardik is a good boy.\n He is calm"
 console.log(b);

 var str=`Hardik is a good boy.
 He is calm`
 console.log(str);

 var num=500
 console.log(`Half of ${num} is ${num/2}.`);

 // let keyword is used
let l = 100;
console.log(l);

// let l = "200"; //SyntaxError: Identifier 'l' has already been declared
// console.log(l);

//we can reinitialize a variable but we cannot redeclare it
l = 300;
console.log(l);

//loops in JS
var num = 10;

// for (var i = 0; i < num; i++){
//     if (i % 2 == 0) {
//         console.log("num is even");
//     }
// }

//const keyword
const a = 2;
console.log(a);
// na hi redeclare na reinitialize
// const a = 5;
a = 4; //TypeError: Assignment to constant variable.
console.log("hey");



