// // jangan ubah isi variabel dibawah
// let row = 3;
// let coordinate = "23";
// let col = 5;

// // write your code here

// for (let i = 0; i < row; i++) {
//     let hasil = "";
//     for (let j = 0; j < col; j++) {
//         // for (k = 0; k < coordinate.length; k++) {
//         //     if (coordinate[j] === "3") {
//         //         hasil += "*"
//         //     }
//         // }
//         if (coordinate.length === "2") {
//             hasil += "*"
//         }
//         hasil += "#"
//     }
//     console.log(hasil);
// }

let bar = 5;
let kol = 5;
let koordinar = "45";

let barM = Number(koordinar[0]);
let kolM = Number(koordinar[1]);

for (let i = 1; i <= bar; i++) {
  let wadah = "";
  for (let j = 1; j <= kol; j++) {
    if (i === barM && j === kolM) {
      wadah += "* ";
    } else {
      wadah += "# ";
    }
  }
  console.log(wadah);
}
