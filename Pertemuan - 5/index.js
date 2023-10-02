// //array
// const students = ["john", "petter", "jack", "jane"];
// const numbers = [1, 2, 3, 4, 5];
// const john = ["john", "doe", 33, true];

// console.log(students);
// console.log(numbers);
// console.log(john);
// //Index
// console.log(students[2]);
// students[2] = "Bob";
// console.log(students);
// //length
// console.log(students.length);
// console.log(students[students.length - 1]);

// //mengakses seluruh element array
// // for(let i=0; i<students.length; i++); {
// //     console.log(students[i]);
// // }

// //Array Method
// //toString()
// console.log(john.toString());
// //join()
// console.log(john.join(" "))
// console.log(john.join("#"))
// console.log(john.join("..."))
// //pop
// john.pop();
// console.log(john);
// //push
// john.push("Good Morning");
// console.log(john);
// //shift
// john.shift();
// console.log(john);
// //unshift
// john.unshift("HEllo");
// console.log(john);
// //splice
// john.splice(2, 0, true);
// console.log(john);
// //slice
// let john2 = john.slice(2,4);
// console.log(john2);
// //Concat
// let output = john.concat(numbers, john2)
// console.log(output);


//Object
let john = {
    firstName: "john",
    lastName: "doe",
    age: 33,
    isMarried: true,
    grade: [80, 90, 100],
    address: {
        city: "Manado",
        province: "Sulawesi Utara",
        postalCode: "95731",
    },
    sayGreetings: function() {
        console.log("Hello my name is " + this.firstName);
    },
};


//Dot notation
// console.log(john.firstName);
// console.log(john.grade[2]);
// console.log(john.address.city);
// console.log(john.sayGreetings());

// //Bracket notation
// console.log(john["firstName"]);
// console.log(john["grade"][2]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]());

// john.job = "Teacher";
// console.log(john);

//Array Object
let students = [
    {
        id: 1,
        name: "john"
    },
    {
        id: 2,
        name: "jackk"
    },
    {
        id: 3,
        name: "petter"
    },
];

//Array.forEach()
// students.forEach(function(item){
//     console.log(item.name);
// });

//map()
// let output = students.map(function(item){
//     return item.name;
// });
// console.log(output);

//Filter()
// let output = students.filter(function(item){
//     return item.name === "john";
// });
// console.log(output);

// //find()
// let output = students.find(function(item){
//     return item.name === "john";
// });
// console.log(output);

//Map, Filter dan Find membutuhkan return untuk 
//menghasilkan array baru