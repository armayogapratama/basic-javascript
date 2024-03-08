// Jangan merubah isi variabel di bawah
let exercise = "<>^v>>>";
let userInput = "<>^^>>>";

// code here
// let persentase = poin/totalPoin*100;
let score = 0;
let maxScore = exercise.length * 10;
let kategori = "";

if (exercise.length === userInput.length) {
  for (let i = 0; i < exercise.length; i++) {
    if (exercise[i] === userInput[i]) {
      // console.log(i, exercise[i], userInput[i]);
      score += 10;
    }
  }
} else {
  console.log("Input yang anda masukkan tidak lengkap!");
}

let persen = Math.floor((score / maxScore) * 100);

if (persen === 100) {
  kategori = "Perfect";
} else if (persen >= 80 && persen <= 99) {
  kategori = "Great";
} else if (persen >= 60 && persen <= 79) {
  kategori = "Good";
} else if (persen >= 0 && persen <= 50) {
  kategori = "Bad";
}

console.log(
  `Anda mendapatkan score ${score} / ${maxScore}. Persentase: ${persen}%, Kategori : ${kategori}`
);
