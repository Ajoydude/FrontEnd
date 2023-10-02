// const greetings = function (name) {
//     return "HEllo";
// };

// const age = 17; // Global

// const greetings = funciton (name) {
//     console,log(age);
//     // const job = "teacher"; //log
//     if (job === "teacher") {
//         const address = "manado"; //Block
//     }
//     return "Hello";
// };

// console.log(job);
// console.log(greetings("John")); //Argument

//IIFE (Immediately Invoked Function Expression)
//Anonymous Function

// (function () {
//    console.log("Hello IIFE"); 
// })()

// const output = (function () {
//    return "Hello IIFE";
// })();

// console.log(output);
//Membutuhkan variable untuk menampung nilai

//Callback Function
//Type 1
// Fungsi yang dikirim sebagai parameter
function createGreetings(name, callback) {
   const greetings = "Hello" + name;
   callback(greetings);
}

function logGreetings(greetings) {
   console.log(greetings);
}

createGreetings("John ", logGreetings);

//Type 2
// function createGreetings(name, callback) {
//    const greetings = "Hello " + name;
//    callback(greetings);
// }



// createGreetings("John", function (greetings) {
//    console.log(greetings);
// });

// Type 2.1
// function createGreetings(callback) {
//    const greetings = "Hello ";
//    callback(greetings);
// }

// createGreetings(function (greetings) {
//    console.log(greetings);
// });