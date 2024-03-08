// let word = "I Lo1ve Co4ding";
// let word = "hackt1iv8";
let word = "pha4se pre3parat2ion";
// let word = "Ja4va4scri1pt";
// let word = "";

// let word = "pha4se pre3parat2ion";

// let word = 'Ja4va4scri1pt'
// write your code

if (word === "") {
  console.log(`Tidak ada kata yang bisa diproses`);
} else {
  let hasil = "";

  for (let i = 0; i < word.length; i++) {
    //iterasi untuk dapat mengakses variabel word,
    if (!isNaN(parseInt(word[i]))) {
      // cek kondisi apabila parseInt(untuk melihat adakah angka/number) variabel word[i], lalu cek apakah dalam variabel word[i], terdapat yang number yang bukan NaN(yaitu isNaN)
      // console.log(i, word[i]);
      for (let j = 0; j < parseInt(word[i]); j++) {
        // iterasi untuk mengakses number di word[i]
        hasil += word[i - 1]; //tampilkan di variabel hasil increment ke word[i - 1] untuk mendapatkan item sebelum number
      }
    } else {
      hasil += word[i]; //jika bernilai false maka tampilkan hasil increment word[i];
    }
  }
  console.log(hasil);
}
