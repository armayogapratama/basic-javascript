// let name = "Misk Spasela";
// let id = "S0opASSrvc";

// let name = "Misk Spasela"
// let id = "Si021rTSz"

let name = "Michael";
let id = "RgB133RTORRR";

// let name = "Basil"
// let id = "S0opASSrvc"

//your code here
let total = 0;
let anggota = "";

for (let i = 0; i < id.length; i++) {
  switch (id[i]) {
    case "R":
      anggota = "anggota biasa";
      total++;
      break;
    case "S":
      anggota = "pengurus sekte";
      total++;
      break;
  }
  // console.log(status);
}

let medali = "";

if (anggota === "anggota biasa") {
  if (total >= 5) {
    medali += "gold";
  }
} else if (anggota === "pengurus sekte") {
  if (total >= 3) {
    medali += "platinum";
  }
}

if (medali === "") {
  console.log(`${name} sudah menjadi pengurus sekte selama ${total} tahun.`);
} else {
  console.log(
    `${name} sudah menjadi ${anggota} selama ${total} tahun dan berhak mendapatkan medali ${medali}`
  );
}
