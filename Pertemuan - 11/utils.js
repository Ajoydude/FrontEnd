 let fullName = "John doe"

 let numbers = [1, 2, 3, 4, 5];

 let john = {
    fullName: "John doe",
    age: 33,
    address: "Manado"
}
let Hello = () => {
    console.log("Hello Module");
};
// let Hello2 = () => {
//     console.log("Hello Module");
// };

export {fullName, numbers as angka, john, };
export default Hello;
// export default Hello2;