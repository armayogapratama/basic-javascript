function startUpCompetition(startUpList) {
  // Write your code here

  if (!startUpList) {
    // untuk mengakses apabila parameter tidak ada / false
    return `Invalid Data`;
  } else {
    // untuk akses parameter true
    let bidangStartUpList = "Startup unicorn\n"; // untuk mengembalikan dalam satu string
    let total = 0; // untuk mendapatkan total banyaknya nama startUp yang lulus valuasi

    for (let i = 0; i < startUpList.length; i++) {
      //looping pertama untuk mengakses array parameter startUpList
      let namaStartUpList = [];
      bidangStartUpList += startUpList[i][0]; //untuk mendapatkan bidang startup

      for (let j = 1; j < startUpList[i].length; j++) {
        //looping kedua untuk mengakses array parameter startUpList[i]
        // console.log(j, "<", startUpList[i][j]);
        let temp = "";
        let flag = false;
        let nilaiValuasi = "";
        let flagtemp = false;

        for (let k = 0; k < startUpList[i][j].length - 1; k++) {
          //looping ketiga untuk mengakses array parameter startUpList[i][j]
          // console.log(startUpList[i][j][k]);

          if (startUpList[i][j][k] === "-") {
            // untuk mengecek separator true
            flag = true;
          } else {
            // jika false
            if (!flag) {
              //mengecek validasi apakah benar false
              temp += startUpList[i][j][k];
            }
          }

          if (flag) {
            // jika flag true jalan ini
            nilaiValuasi += startUpList[i][j][k + 1];
          }

          // console.log(namaStartUpList, "<<<");
        }

        if (Number(nilaiValuasi) >= 14) {
          //untuk mengecek valuasi >= 14
          namaStartUpList.push(temp);
        }
      }

      if (namaStartUpList.length) {
        //untuk mengakses nama startup
        bidangStartUpList += `, ${namaStartUpList.length} startup (`;
        for (let j = 0; j < namaStartUpList.length; j++) {
          if (j === namaStartUpList.length - 1) {
            bidangStartUpList += `${namaStartUpList[j]})\n`;
          } else {
            bidangStartUpList += `${namaStartUpList[j]}, `;
          }
        }
      } else {
        bidangStartUpList += ` (tidak ada startup unicorn)\n`;
      }

      total += namaStartUpList.length;
      // console.log(namaStartUpList, "<<<");
    }
    // console.log(total);

    bidangStartUpList += `Total ${total} startup unicorn`;

    return bidangStartUpList;
  }
}

// function startUp(name, separator) {

// }

console.log(startUpCompetition());
// 'Invalid Data'

console.log("================================");
console.log("===============   ==============");
console.log("================================");

let indonesia = [
  ["Ecommerce", "Tikipidia-17", "Bikilipik-08", "Bhinniki-07", "BleBle.cim-15"],
  ["Tourism", "Triviliki-16", "Tikit.cim-12"],
  ["Healthtech", "Hilidic-15"],
  ["Agrotech", "Siyirbix-17", "TikingSiyir.ci-16"],
];
console.log(startUpCompetition(indonesia));
// Startup unicorn
// Ecommerce, 2 startup (Tikipidia, BleBle.cim)
// Tourism, 1 startup (Triviliki)
// Healthtech, 1 startup (Hilidic)
// Agrotech, 2 startup (Siyirbix, TikingSiyir.ci)
// Total 6 startup unicorn
console.log("================================");
console.log("===============   ==============");
console.log("================================");

let singapore = [
  ["Ecommerce", "Shipee-18", "Lizidi-19"],
  ["Tourism", "HalalTrip-07", "verylocaltrip.com-12"],
  ["Healthtech", "Doctor Anywhere-14", "Healint-13"],
  ["Agrotech", "SINGROW-19", "Simplyfresh-09", "eFeedLink-18"],
];
console.log(startUpCompetition(singapore));
// Startup unicorn
// Ecommerce, 2 startup (Shipee, Lizidi)
// Tourism (tidak ada startup unicorn)
// Healthtech, 1 startup (Doctor Anywhere)
// Agrotech, 2 startup (SINGROW, eFeedLink)
// Total 5 startup unicorn

console.log("================================");
console.log("===============   ==============");
console.log("================================");

let malaysia = [
  ["Ecommerce", "Dropee-17"],
  ["Healthtech", "BookDoc-18"],
  ["Agrotech", "dahmakan-19"],
];
console.log(startUpCompetition(malaysia));
// Startup unicorn
// Ecommerce, 1 startup (Dropee)
// Healthtech, 1 startup (BookDoc)
// Agrotech, 1 startup (dahmakan)
// Total 3 startup unicorn
