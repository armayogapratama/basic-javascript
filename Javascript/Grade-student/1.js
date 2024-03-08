var nama = "Jennie";
var nilai = 70;

// code here
// algoritma
/*
input: nilai
output: mendapatkan nama dengan score nya

1. Deklarasikan variabel nama dan nilai dengan any value
2. Untuk mendapatkan nilai dari nama, penuhi kondisi sebegai berikut:
a. jika nilai 80 - 100: A, maka tampilkan nama: <variabelnama>; score: A
b. jika nilai 65 - 79: B, maka tampilkan nama: <variabelnama>; score: B
c. jika nilai 50 - 64: C, maka tampilkan nama: <variabelnama>; score: C
d. jika nilai 35 - 49: D, maka tampilkan nama: <variabelnama>; score: D
e. jika nilai 0 - 34: E, maka tampilkan nama: <variabelnama>; score: E
f. jika nilai kurang dari 0 dan lebih dari 100, maka tampilkan "Nilai Invalid"
*/

if (nilai >= 80 && nilai <= 100) {
  console.log(`nama: ${nama}; score: A`);
} else if (nilai >= 65 && nilai < 80) {
  console.log(`nama: ${nama}; score: B`);
} else if (nilai >= 50 && nilai < 65) {
  console.log(`nama: ${nama}; score: C`);
} else if (nilai >= 35 && nilai < 50) {
  console.log(`nama: ${nama}; score: D`);
} else if (nilai >= 0 && nilai < 35) {
  console.log(`nama: ${nama}; score: E`);
} else {
  console.log("Nilai Invalid");
}
