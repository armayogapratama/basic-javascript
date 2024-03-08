function vocalSeeker(board) {
  // Write your code here
  const vokal = `aAiIuUeEoO`;
  let hasil = ``;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // console.log(i, "<", board[i], "=", j, board[i][j]);
      for (let k = 0; k < vokal.length; k++) {
        // console.log(k, vokal[k]);
        if (board[i][j] === vokal[k]) {
          hasil += board[i][j];
          break;
          // console.log(hasil);
        }
      }
    }
  }
  return `vokal ditemukan ${hasil.length} dan kumpulan vokal adalah ${hasil}`;
}

//DRIVER CODE

let board = [
  ["*", "*", "*", 10],
  ["*", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b"],
];

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo
