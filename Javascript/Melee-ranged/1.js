function splitting(str) {
  // you can only write your code here!

  let hasilSplitting = [];
  let pisahKoma = "";

  for (let i = 0; i < str.length; i++) {
    // console.log(i, "===", str[i]);
    if (str[i] === ",") {
      hasilSplitting.push(pisahKoma);
      pisahKoma = "";
    }

    if (str[i] !== ",") {
      pisahKoma += str[i];
    }
  }
  return hasilSplitting;
}

function meleeRangedGrouping(str) {
  // you can only write your code here!
  if (!str) {
    return `[]`;
  }

  let resultSplitting = splitting(str);

  // let result = [];
  let ranged = [];
  let melee = [];

  for (let i = 0; i < resultSplitting.length; i++) {
    // console.log(i, resultSplitting[i]);
    let character = "";
    let position = "";
    let separator = false;

    for (let j = 0; j < resultSplitting[i].length; j++) {
      // console.log(j, resultSplitting[i][j]);
      if (resultSplitting[i][j] === "-") {
        separator = true;
        continue;
      }

      if (separator) {
        position += resultSplitting[i][j];
        // console.log(position);
      } else {
        character += resultSplitting[i][j];
        // console.log(character);
      }
    }
    if (position === "Ranged") {
      ranged.push(character);
      // console.log(ranged);
    } else if (position === "Melee") {
      melee.push(character);
      // console.log(melee);
    }
  }

  return [ranged, melee];
}

// TEST CASE
let input1 = "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged";
let input2 = "Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged";
console.log(meleeRangedGrouping(input1)); // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping(input2)); // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping("")); // []
