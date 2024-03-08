function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = 0;
  let indexX = [];

  for (let i = 0; i < arr.length; i++) {
    let perArr = arr[i];
    if (perArr === "o") {
      indexO = i;
      // console.log(i, "<<<");
    } else if (perArr === "x") {
      indexX.push(i);
    }
  }
  // console.log(indexX, ">>>");

  if (indexX.length === 0) {
    return 0;
  } else {
    let terdekat = Math.abs(indexX[0] - indexO);
    // console.log(terdekat, "---");
    for (let i = 0; i < indexX.length; i++) {
      if (terdekat > Math.abs(indexX[i] - indexO)) {
        terdekat = Math.abs(indexX[i] - indexO);
      }
    }
    return terdekat;
  }
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
