//3 types of function
// 1. Normal function

//function definition
    
// function function_name(param1,param2) {
//     //do something
// }

//function invoke
//function_name(arg1,arg2);

// function add(a,b) {
//     return a+b;
    
// }
// let ans= add(2,6);
// console.log(ans);

//Functions are traeated as first class citizens in Javascript
//---> Functions can be returned
//---> Functions can be passed as parameters/arguments

function calculator(str,a,b){
    if (str=='add'){
        return function add(){
            console.log(a+b);
        }

    }
    // else if (str=='sub'){
    //     function sub(a,b){
    //         return a-b;
    //     }

    
}
let returnedFunc = calculator('add',2,3);
console.log("returned function is\n"+ returnedFunc);
returnedFunc();


//2. Function Expression

// let variable_name = function(){
//     do something
// }
// nameof variable is used to invoke the function
// variable_name();

let sayHi=function (){
    console.log("hello guys i am a function expression");
}

console.log("line 56\n" + sayHi);
sayHi();
//abcd(); error abcd is not defined