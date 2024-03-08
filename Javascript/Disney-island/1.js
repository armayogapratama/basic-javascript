// isi variabel wahana, usia dan saldo tidak boleh dirubah
// variabel tarif tidak boleh langsung di isi, gunakan proses untuk mengisinya

let wahana = "Wahana Utara";
let usia = 18;
let saldo = 175000;

// code here
let tarif;

if (usia <= 1) {
  console.log("Dilarang masuk");
} else if (usia >= 2 && usia <= 12) {
  if (wahana === "Wahana Utara") {
    tarif = 85000;
  } else if (wahana === "Wahana Selatan") {
    tarif = 143000;
  } else {
    console.log("Tiket tidak ditemukan!");
  }
} else {
  if (wahana === "Wahana Utara") {
    tarif = 125000;
  } else if (wahana === "Wahana Selatan") {
    tarif = 165000;
  } else {
    console.log("Tiket tidak ditemukan!");
  }
}

if (tarif) {
  if (saldo >= tarif) {
    console.log(
      `Sisa saldo anda adalah RP.${saldo - tarif},00. Selamat bermain.`
    );
  } else {
    console.log(
      `Sisa saldo kurang RP.${
        tarif - saldo
      },00. Tidak cukup untuk membeli tiket.`
    );
  }
}
