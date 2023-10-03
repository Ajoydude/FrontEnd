//Class in JS
//-----------

//Object Literal
//Object usualally ->
// const mobil1 = {
//     transimisi: "Manual",
//     bahanBakar: "Bensin",
//     mesinl: 1500,
//     nyalakanMesin: function(){
//         console.log(`Mobil ${this.transimisi} dinyalakan`);
//     },
// };

// const mobil2 = {
//     transimisi: "Automatic",
//     bahanBakar: "solar",
//     mesin: 2000,
//     nyalakanMesin: function(){
//         console.log(`Mobil ${this.transimisi} dinyalakan`);
//     },
// };

//ES6
class Mobil{
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin() {
        console.log(`Mobil ${this.transmisi} dinyalakan`);
    }
}

// const mobil1 = new Mobil('transimisi', "bensin", 1500);
// mobil1.nyalakanMesin();
// const mobil2 = new Mobil("Automatic", "solar", 2000);
// mobil2.nyalakanMesin();
// console.log(mobil1, mobil2);

class Toyota extends Mobil{
    constructor(merek, warna, transmisi, bahanBakar, mesin){
        super(transmisi, bahanBakar, mesin);
        this.merek = merek;
        this.warna = warna;
    }
    //Overriding
    nyalakanMesin() {
        console.log(`Mobil merek ${this.merek} dinyalakan`);
    }
}

const agya = new Toyota('Agya', 'Putih', "Automatic", "Bensin", 1000);
agya.nyalakanMesin();
console.log(agya);
