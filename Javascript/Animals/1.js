function getAnimals(arr) {
  // Write your code here
  // let resultAnimal = [];
  let hewanKarnivora = "";
  let hewanHerbivora = "";
  let hewanOmnivora = "";

  for (let i = 0; i < arr.length; i++) {
    // console.log(i, "<<", arr[i]);
    let setiapArr = arr[i];
    let getResult = [];
    let temp = "";
    for (let j = 0; j < setiapArr.length + 1; j++) {
      // console.log(i, "<<", arr[i]);
      let perArr = setiapArr[j];
      if (perArr === ":" || perArr === undefined) {
        getResult.push(temp);
        temp = "";
      } else {
        temp += perArr;
      }
    }
    // console.log(getResult);
    let [nama, jenisHewan] = getResult;

    if (jenisHewan === "K") {
      if (hewanKarnivora.length < nama.length) {
        hewanKarnivora = nama;
      }
    } else if (jenisHewan === "H") {
      if (hewanHerbivora.length < nama.length) {
        hewanHerbivora = nama;
      }
    } else if (jenisHewan === "O") {
      if (hewanOmnivora.length < nama.length) {
        hewanOmnivora = nama;
      }
    }
  }
  return [hewanKarnivora, hewanHerbivora, hewanOmnivora];
}

//Test Case

console.log(getAnimals(["Singa:K", "Kuda:H", "Monyet:O"]));
// [ 'Singa','Kuda','Monyet' ]

console.log(
  getAnimals([
    "Macan:K",
    "Ayam:O",
    "Gajah:H",
    "Monyet:O",
    "Kerbau:H",
    "Musang:O",
    "Burung:H",
    "Hiu:K",
  ])
);
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(
  getAnimals([
    "Tikus:O",
    "Merpati:H",
    "Beruang:O",
    "Elang:K",
    "Perkutut:H",
    "Harimau:K",
  ])
);
// [ 'Harimau', 'Perkutut', 'Beruang' ]
