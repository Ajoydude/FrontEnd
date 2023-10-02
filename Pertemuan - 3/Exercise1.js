//Buatlah fungsi yang menerima 1 parameter angka
//dan mengembalikan string apakah angka yang dimasukan
//adalah bilangan ganjil atau genap
 

function checker(angka){
    angka = angka % 2;
    let isAngka = angka == 0 ? "angka adalah Genap" : "angka adalah Ganjil";
    return isAngka;
    
}

let hasil = checker(2);
console.log(hasil);
