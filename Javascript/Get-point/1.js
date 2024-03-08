function getPoints(history) {
  let itemPoint = {
    Moonlight: 120,
    Goldqueen: 550,
    "Beras Parist": 1200,
    "Minyak Fatma": 2500,
  };
  // write your code here
  // console.log(history.histories);
  // console.log(history[0]);
  // console.log(itemPoint[history[1]]);
  let resultOfGetPoint = {};
  let getTotal = 0;

  for (let i = 0; i < history.length; i++) {
    // console.log(i, "<<", history[i]);
    let listHistoryBelanja = history[i];
    let valueOfItemPoint = itemPoint[listHistoryBelanja];
    // console.log(listHistoryBelanja, "===", valueOfItemPoint);

    getTotal += valueOfItemPoint;

    if (resultOfGetPoint[listHistoryBelanja] === undefined) {
      resultOfGetPoint[listHistoryBelanja] = 0;
    }
    resultOfGetPoint[listHistoryBelanja]++;
  }
  return { getTotal, resultOfGetPoint };
}

// const history = [
//     'Minyak Fatma',
//     'Moonlight',
//     'Beras Parist',
//     'Minyak Fatma',
//     'Goldqueen',
//     'Beras Parist',
//     'Moonlight',
//     'Moonlight',
//     'Moonlight',
//     'Minyak Fatma',
//     'Goldqueen',
//     'Goldqueen',
//     'Minyak Fatma',
//     'Beras Parist',
//     'Beras Parist',
//     'Moonlight',
//     'Moonlight',
//     'Minyak Fatma',
//     'Minyak Fatma'
// ]
// console.log(getPoints(history))

function getPrizes(point) {
  let listPrize = [
    [2000, "Voucher 10k", "Sticker", "Penggaris"],
    [5000, "Voucher 25k", "Kinderboy", "Tissue", "Piring"],
    [10000, "Payung", "Panci"],
  ];
  // write your code here
  // console.log(point);
  let getResultOfGetPrizes = [];

  for (let i = 0; i < listPrize.length; i++) {
    // console.log(i, "===", listPrize[i]);
    let costOfPrize = listPrize[i];
    let valueOfPrize = costOfPrize[0];

    // console.log(costOfPrize, "===", valueOfPrize);

    for (let j = 1; j < costOfPrize.length; j++) {
      // console.log(j, "<<", costOfPrize[j]);
      if (point >= valueOfPrize) {
        getResultOfGetPrizes.push(costOfPrize[j]);
        point -= valueOfPrize;
      }
    }
  }
  return getResultOfGetPrizes;
}

// console.log(getPrizes(22000));

function betamart(pembeli) {
  // write your code here
  // console.log(pembeli);

  if (!pembeli) {
    return `Tidak ada pembeli yang belanja`;
  }

  let { name, histories } = pembeli;
  // console.log(name, "<<", histories);
  for (let i = 0; i < histories.length; i++) {
    // console.log(histories[i]);

    // if (
    //     histories[i] === "Moonlight" &&
    //     histories[i] === "Goldqueen" &&
    //     histories[i] === "Beras Parist" &&
    //     histories[i] === "Minyak Fatma"
    // ) {

    // } else {
    //     return `Terdapat item yang tidak terdapat point`;
    // }

    switch (histories[i]) {
      case "Moonlight":
      case "Goldqueen":
      case "Beras Parist":
      case "Minyak Fatma":
        break;
      default:
        return `Terdapat item yang tidak terdapat point`;
    }
  }

  let resultOfPay = getPoints(histories);
  // console.log(resultOfPay);
  let { getTotal, resultOfGetPoint } = resultOfPay;
  // console.log(getTotal, resultOfGetPoint);
  let listOfPrizes = getPrizes(getTotal);
  console.log(listOfPrizes);

  return {
    name,
    resultOfGetPoint,
    listOfPrizes,
  };
}

console.log(
  betamart({
    name: "Ilham",
    histories: [
      "Moonlight",
      "Goldqueen",
      "Beras Parist",
      "Moonlight",
      "Goldqueen",
      "Beras Parist",
      "Minyak Fatma",
      "Minyak Fatma",
      "Minyak Fatma",
      "Moonlight",
      "Goldqueen",
      "Goldqueen",
      "Moonlight",
      "Beras Parist",
      "Beras Parist",
      "Minyak Fatma",
      "Minyak Fatma",
      "Moonlight",
      "Moonlight",
    ],
  })
);

/*
{
name: 'Ilham',
belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

console.log(
  betamart({
    name: "Kosasih",
    histories: [
      "Moonlight",
      "Moonlight",
      "Goldqueen",
      "Moonlight",
      "Minyak Fatma",
      "Goldqueen",
      "Beras Parist",
      "Beras Parist",
      "Beras Parist",
      "Moonlight",
      "Minyak Fatma",
      "Minyak Fatma",
      "Moonlight",
      "Goldqueen",
      "Goldqueen",
      "Goldqueen",
      "Beras Parist",
      "Moonlight",
      "Moonlight",
      "Beras Parist",
      "Beras Parist",
      "Minyak Fatma",
      "Minyak Fatma",
      "Goldqueen",
      "Goldqueen",
      "Moonlight",
      "Moonlight",
      "Moonlight",
      "Moonlight",
    ],
  })
);

/*
{
name: 'Kosasih',
belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
prizes: [
  'Voucher 10k',
  'Sticker',
  'Penggaris',
  'Voucher 25k',
  'Kinderboy',
  'Tissue'
]
}
*/

console.log(betamart());
// Tidak ada pembeli yang belanja
