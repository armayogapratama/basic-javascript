var nama = "Jisoo";
var nilai = 70;
var absen = 3;

// code here
// pseudocode
/*
STORE nama AS "Jisoo"
STORE nilai AS 70
STORE absen AS 3

IF nilai MORE THAN EQUEL 70 && absen LESS THAN 5
    DISPLAY nama CONCAT WITH "lulus"
ELSE
    DISPLAY nama CONCAT WITH "tidak lulus"
END IF
*/

if (nilai >= 70 && absen < 5) {
  console.log(`${nama} lulus`);
} else {
  console.log(`${nama} tidak lulus`);
}
