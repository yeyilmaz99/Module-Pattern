//1-) Problem 1: global variable naming conflicts
//script.js
// var name = 'yunus';
// //app.js
// var name = 'yilmaz';

// console.log(name);


// 2-) Encapsulation

// var Counter ={
//     number : 0,
//     increment : function () {
//         return ++this.number;
//     },
//     decrement : function () {
//         return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.decrement());

// IIFE (Immediately Invoked Function Expressions) /////onemli

//script.js
// (function(){
//     var name = 'yunus';
//     console.log(name)
// })();
// //app.js
// (function(){
//     var name = 'yilmaz';
//     console.log(name)
// })();

// var Module =(function(){
//     //private members
//     let number =0;
//     let increment = function(){
//         return ++number;
//     }
//     let decrement = function(){
//         return --number;
//     }
//     // console.log(increment()); // 1 
//     return {
//         // public members
//         increment,
//         decrement
//     }
// })();

// // console.log(number); //uncaught referenceError number is not defined!
// // console.log(increment()); //uncaught referenceError number is not defined!

// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());


var Module = (function(){
    var privateMethod = function(){

    };
    return {
       publicMethod : function(){

        }
    }
})()

Module.publicMethod();