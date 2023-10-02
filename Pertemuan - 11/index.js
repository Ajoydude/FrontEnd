// import Hello, { angka, fullName as namaLengkap, john} from "./utils.js";
// import sayGreetings from "./sayGreetings.js";

// console.log(namaLengkap);
// console.log(angka);
// console.log(john);
// Hello();
// sayGreetings();

//ASYNCHRONOUS JS

//synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//asynchronous -> multi thread -> non blocking

// Ada 2 macam asynchronous:

// // 1. parallel
// setTimeout(() => {
//     console.log("Proses 1");
// }, 3000);
// //------------------------
// console.log("Proses 2");
// //------------------------
// setTimeout(() => {
//    console.log("Proses 3"); 
// }, 4000);
// //-----------------------
// console.log("Proses 4");

// 2. concurrent
// 2.a callback
// setTimeout(() =>{
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             },3000);
//         },3000);
//     },3000);
// },3000);

// 2.b promise

// Buat promise
let condition = true
const newPromise = new Promise((resolve, reject) => {
    if(condition) {
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }

});

// Pakai promise
// 1. then - catch

// newPromise.then((result) => {
//     console.log(result);
// }).catch(error => console.log(error));

// 2. async - await (Es7)
// async - await digunakan pada fungsi

const consumePromise = async () => {
    try {
        let result = await newPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};
consumePromise();