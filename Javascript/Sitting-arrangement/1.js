function sittingArrangement(person, column) {
  // Your code here

  if (column < 1) {
    return `Invalid number`;
  }

  let result = [];
  let temp = [];

  let i = 0;
  while (true) {
    for (let j = 0; j < column; j++) {
      if (!person[i]) {
        temp.push(`Kursi Kosong`);
      } else {
        temp.push(person[i]);
      }
      i++;
    }
    result.push(temp);
    temp = [];

    if (!person[i]) {
      break;
    }
  }
  return result;
}

//DRIVER CODE

console.log(sittingArrangement(["A", "B", "C"], 0)); //Invalid number
console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement(["Yosia", "Asrawi", "Andru"], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(
  sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4)
);
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]
