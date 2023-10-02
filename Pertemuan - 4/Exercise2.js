//Exercise 2

//IIFE
// (function checker(){
//     nilai = 3
//     angka = nilai % 2;
//     let isAngka = angka == 0 ? "angka adalah ganjil" : "angka adalah genap";
//     console.log(isAngka)
    
// })();

//Callback
// function checker (angka, callback) {
//     angka = angka % 2;
//     let isAngka = angka == 0 ? "angka adalah Genap" : "angka adalah Ganjil";
//     callback(isAngka);
// }

// function rumus(isAngka) {
//     console.log(isAngka);
// }

// checker(3, rumus);

function checker (angka, callback) {
    angka = angka % 2;
    let isAngka = angka == 0 ? "angka adalah Genap" : "angka adalah Ganjil";
    callback(isAngka);
}

checker(3, function (isAngka) {
    console.log(isAngka);
});