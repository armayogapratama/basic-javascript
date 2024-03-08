function getStartUp(arr) {
  // Write your code here
  // console.log(arr);
  let startUpPendek = arr[0];
  let startUpPanjang = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let perArr = arr[i];
    if (perArr.length < startUpPendek.length) {
      startUpPendek = perArr;
    }

    if (perArr.length >= startUpPanjang.length) {
      startUpPanjang = perArr;
    }
  }
  return [startUpPendek, startUpPanjang];
}

//Test Case
console.log(getStartUp(["Bikilipik", "Tikit.cim", "Ilidiktir", "TiniHib"]));
// [ 'TiniHib', 'Ilidiktir' ]

console.log(
  getStartUp([
    "Lizidi",
    "Iirbnb",
    "TikingSiyir.ci",
    "PriSihit",
    "DiktirSihit",
    "eFishiry",
    "babaAli",
    "eMeat",
  ])
);
// [ 'eMeat', 'TikingSiyir.ci' ]

console.log(
  getStartUp([
    "Tikipidia",
    "Triviliki",
    "Hilidic",
    "Siyirbix",
    "Shipee",
    "Bhinniki",
    "BleBle.cim",
    "PigiPigi",
    "tomazo",
  ])
);
// [ 'Shipee', 'BleBle.cim' ]

console.log(
  getStartUp([
    "FoGoods",
    "FoMarts",
    "Lazora",
    "eFruit",
    "FoHealth",
    "FoTravel",
    "HaiDoc",
    "ticket.net",
  ])
);
// [ 'Lazora', 'ticket.net' ]
