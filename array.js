const namaTeman = ["Komang", "Made", "Modeong", "Obay"];
console.log(namaTeman[0]);
console.log(namaTeman.length);

// namaTeman.forEach(function (item, index, array) {
//     console.log(item, index, array);
// });

namaTeman.push("Uyo");
const namaTemanLama = namaTeman.slice();
namaTeman.pop();

// console.log("Nama teman: ", namaTeman);

// console.log("Nama teman lama: ", namaTemanLama);

// for (let index = 0; index < namaTeman.length; index++) {
//     const element = namaTeman[index];
//     console.log(element);
// }

// let index = 0
// while (index < namaTeman.length) {
//     const element = namaTeman[index];
//     console.log(element);
//     index++;
// }

console.log(
    namaTeman
        .filter(function (teman, ke) {
            return teman == "Made";
        })
        .map(function (teman, ke) {
            return `${teman} adalah teman ke ${ke + 1}`;
        })
);

// namaTeman.push("Uyo");

// console.log(namaTeman);

// namaTeman.pop();

// console.log(namaTeman);

// namaTeman.shift();

// console.log(namaTeman);

// const indexModeong = namaTeman.indexOf("Modeong");
// console.log(indexModeong);
// namaTeman.splice(indexModeong, 1);

// console.log(namaTeman);

// console.log(
//     namaTeman.reduce(function (acc, teman, ke) {
//         acc[teman] = `Teman ke ${ke + 1}`;

//         return acc;
//     }, {})
// )