// var nama = "Fajrin";
// var tinggi = 180;
// var umur = 20;
// var uang = 70000;

var nama = "Ihsan";
var umur = 18;
var tinggi = 164;
var uang = 35000;
// write your code

let selisihUang = 50000 - uang;

let selisihTinggi = 166 - tinggi;

if (umur >= 18) {
  if (uang < 50000 && tinggi < 166) {
    console.log(
      `Tinggi kamu kurang ${selisihTinggi}cm dan kamu kurang uang sebanyak ${selisihUang} untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!`
    );
  } else if (uang < 50000 && tinggi >= 166) {
    console.log(
      `Kamu kurang uang sebanyak ${selisihUang} untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!`
    );
  } else if (uang >= 50000 && tinggi < 166) {
    console.log(
      `Tinggi kamu kurang ${selisihTinggi}cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!`
    );
  } else if (uang >= 50000 && tinggi >= 166) {
    console.log("Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!");
  }
} else {
  console.log(`Maaf ${nama}, kamu tidak dapat memasuki kawasan ini!`);
}

// pseudocode
/*
STORE nama WITH ANY STRING
STORE tinggi WITH ANY NUMBER
STORE umur WITH ANY NUMBER
STORE uang WITH ANY NUMBER

STORE selisihUang WITH 50000 MINUS uang

STORE selisihTinggi WITH 166 MINUS tinggi

IF umur MORE THAN EQUAL 18
    IF uang LESS THAN 50000 AND tinggi LESS THAN 166
        DISPLAY "Tinggi kamu kurang " CONCAT WITH selisihTinggi CONCAT WITH "cm dan kamu kurang uang sebanyak " CONCAT WITH selisihUang CONCAT WITH " untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"
    ELSE IF uang LESS THAN 50000 AND tinggi MORE THAN EQUAL 166
        DISPLAY "Kamu kurang uang sebanyak " CONCAT WITH selisihUang CONCAT WITH " untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!"
    ELSE IF uang MORE THAN EQUAL 50000 AND tinggi LESS THAN 166
        DISPLAY "Tinggi kamu kurang" CONCAT WITH selisihTinggi CONCAT WITH "cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!"
    ELSE IF uang MORE THAN EQUAL 50000 AND tinggi MORE THAN EQUAL 166
        DISPLAY "Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-kacir!"
    END IF
ELSE
    DISPLAY "Maaf" CONCAT WITH nama CONCAT WITH ", kamu tidak dapat memasuki kawasan ini"
END IF
*/
