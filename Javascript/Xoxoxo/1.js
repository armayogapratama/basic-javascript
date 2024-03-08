let kata = "xoxoxo";
// insert your coding here
let xTotal = 0;
let oTotal = 0;

for (let i = 0; i < kata.length; i++) {
  if (kata[i] === "x") {
    xTotal++;
  }

  if (kata[i] === "o") {
    oTotal++;
  }
}

// console.log(xTotal, oTotal);

if (oTotal === xTotal) {
  console.log(true);
} else {
  console.log(false);
}
