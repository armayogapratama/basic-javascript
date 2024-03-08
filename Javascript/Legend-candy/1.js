// const randomTickets = 'YOAAAAANM'
// let money = 0

// let randomTickets = "YO!#QWEMAN&&ZB"
// let money = 0

// let randomTickets = "@^&ABCXYZOPQ*"
// let money = 0

// let randomTickets = "XVP#QAN!!"
// let money = 0

let randomTickets = "TDKHKI";
let money = 0;

// Your code here

let hurufKamus = "YOMAN";
let simbolKamus = "!@#$%^&*";

let total = 0;
let hadiah = "";
let harga = randomTickets.length * 1000;

for (let i = 0; i < randomTickets.length; i++) {
  let perHuruf = randomTickets[i];

  for (let j = 0; j < hurufKamus.length; j++) {
    let perKamus = hurufKamus[j];

    if (perHuruf === perKamus) {
      total += 20;
      break;
    }
  }

  for (let z = 0; z < simbolKamus.length; z++) {
    let perSimbol = simbolKamus[z];

    if (perHuruf === perSimbol) {
      total++;
      break;
    }
  }
}

// console.log(total);

if (total > 100) {
  hadiah = "hadiah utama";
} else if (total >= 50 && total <= 100) {
  hadiah = "pleystetion5";
} else if (total < 50) {
  hadiah = "souvenir permen karet";
}

console.log(
  `Kamu menghabiskan uang sejumlah ${harga} dan kamu mendapat ${hadiah}`
);
