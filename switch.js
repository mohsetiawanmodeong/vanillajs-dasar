// const foo = "Papayas"
// let namaBuah = "";
// switch (foo) {
//     case "Papayas":
//         namaBuah = "Papayas"
//         break;

//     case "Salak":
//         namaBuah = "Salak"
//         break;

//     default:
//         namaBuah = "Semangka"
//         break;
// }

// console.log(namaBuah);

const nomor = 1;

function pilihBuah(nomor) {
    switch (nomor) {
        case 1:
        case 2:
            return "Salak";

        case 3:
            return "Mangga";

        case 4:
            return "Durian";

        default:
            return "Semangka";
    }
}

console.log(pilihBuah(2));