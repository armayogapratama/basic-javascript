var detik = 61;

// code here
let menit = 0;
let sisaDetik = 0;

sisaDetik = detik % 60;
menit = (detik - sisaDetik) / 60;

if (sisaDetik.toString().length === 1) {
  sisaDetik = "0" + sisaDetik;
}

console.log(`${menit}:${sisaDetik}`);
