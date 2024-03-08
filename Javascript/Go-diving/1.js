// let age = 19;
// let canSwim = true;
// let haveLicense = false;

// let age = 9;
// let canSwim = false;
// let haveLicense = false;

// let age = 10;
// let canSwim = false;
// let haveLicense = false;

let age = 16;
let canSwim = false;
let haveLicense = false;

// let age = 11;
// let canSwim = true;
// let haveLicense = false;

// let age = 19;
// let canSwim = true;
// let haveLicense = false;

// let age = 19;
// let canSwim = true;
// let haveLicense = true;

// Your code here

if (age < 10) {
  console.log(`Mohon maaf, kamu belum cukup umur!`);
} else if (age <= 15) {
  if (canSwim === true) {
    if (haveLicense === false) {
      console.log(
        `Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving, dan ditemani oleh buddy`
      );
    } else {
      console.log(
        `Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving`
      );
    }
  } else {
    console.log(`Mohon maaf, kamu tidak bisa berenang!`);
  }
} else {
  if (canSwim === true) {
    if (haveLicense === false) {
      console.log(
        `Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving, dan ditemani oleh buddy`
      );
    } else {
      console.log(
        `Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving`
      );
    }
  } else {
    console.log(`Mohon maaf, kamu tidak bisa berenang!`);
  }
}

// if (age <= 15) {
//     console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan snorkling`);
// } else {
//     if (canSwim === true) {
//         if (haveLicense === false) {
//             console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving, dan ditemani oleh buddy`);
//         } else {
//             console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving`);
//         }
//     } else {
//         console.log(`Mohon maaf, kamu tidak bisa berenang!`);
//     }
// }
