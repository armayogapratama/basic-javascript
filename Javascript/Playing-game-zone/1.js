function getArcadeResult(history) {
  let arcadeTickets = {
    "Circus Ball Drop": 200,
    "Lucky Chicken": 100,
    "Street Basketball": 50,
    "Gold Rush": 20,
  };
  // write your code here
  // console.log(history);
  let totalTicket = 0;
  let gameReport = {};

  for (let i = 0; i < history.length; i++) {
    let getHistory = history[i];
    // console.log(getHistory);
    let valueOfHistory = arcadeTickets[getHistory];
    // console.log(valueOfHistory);

    totalTicket += valueOfHistory;

    if (gameReport[getHistory] === undefined) {
      gameReport[getHistory] = 0;
    }
    gameReport[getHistory]++;
  }

  return { totalTicket, gameReport };
}

// const history = [
//   'Circus Ball Drop',
//   'Lucky Chicken',
//   'Street Basketball',
//   'Circus Ball Drop',
//   'Lucky Chicken',
//   'Street Basketball',
//   'Gold Rush',
//   'Gold Rush',
//   'Gold Rush',
//   'Circus Ball Drop',
//   'Lucky Chicken',
//   'Lucky Chicken',
//   'Circus Ball Drop',
//   'Street Basketball',
//   'Street Basketball',
//   'Gold Rush',
//   'Gold Rush',
//   'Circus Ball Drop',
//   'Circus Ball Drop'
// ]

// console.log(getArcadeResult(history))

function getPrizes(ticket) {
  let listPrize = [
    [200, "Rautan", "Pensil", "Penghapus"],
    [500, "Tempat Pensil", "Celengan", "Buku Tulis", "Penjepit Rambut"],
    [1000, "Boneka", "Tas"],
  ];
  // write your code here
  // console.log(ticket);
  let getResultOfGetPrizes = [];

  for (let i = 0; i < listPrize.length; i++) {
    let getPrizes = listPrize[i];
    // console.log(getPrizes);
    let valueOfListPrizes = getPrizes[0];
    // console.log(valueOfListPrizes);
    for (let j = 1; j < getPrizes.length; j++) {
      let resultGetPrizes = getPrizes[j];
      // console.log(resultGetPrizes);
      if (ticket >= valueOfListPrizes) {
        getResultOfGetPrizes.push(resultGetPrizes);
        ticket -= valueOfListPrizes;
      }
    }
  }
  // console.log(getResultOfGetPrizes);
  // let getResultOfPrizes = getArcadeResult(getResultOfGetPrizes);
  return getResultOfGetPrizes;
}

// console.log(getPrizes(1900));

function gamezone(user) {
  //code
  if (!user) {
    return `Tidak ada pemain yang bermain`;
  }

  let { name, histories } = user;

  for (let i = 0; i < histories.length; i++) {
    // console.log(histories[i]);
    let getHistories = histories[i];

    switch (getHistories) {
      case "Gold Rush":
      case "Street Basketball":
      case "Lucky Chicken":
      case "Circus Ball Drop":
        break;
      default:
        return `Terdapat permainan yang tidak tersedia di gamezone`;
    }
  }
  let ResultOfGame = getArcadeResult(histories);
  let { totalTicket, gameReport } = ResultOfGame;
  // console.log(totalTicket);
  // console.log(gameReport);
  let prizes = getPrizes(totalTicket);

  return {
    name,
    gameReport,
    prizes,
  };
}

console.log(
  gamezone({
    name: "Ihsan",
    histories: [
      "Circus Ball Drop",
      "Lucky Chicken",
      "Street Basketball",
      "Circus Ball Drop",
      "Lucky Chicken",
      "Street Basketball",
      "Gold Rush",
      "Gold Rush",
      "Gold Rush",
      "Circus Ball Drop",
      "Lucky Chicken",
      "Lucky Chicken",
      "Circus Ball Drop",
      "Street Basketball",
      "Street Basketball",
      "Gold Rush",
      "Gold Rush",
      "Circus Ball Drop",
      "Circus Ball Drop",
    ],
  })
);
// /**
//  * {
//   name: 'Ihsan',
//   gameReport: {
//     'Circus Ball Drop': 6,
//     'Lucky Chicken': 4,
//     'Street Basketball': 4,
//     'Gold Rush': 5
//   },
//   prizes: [ 'Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan' ]
// }
//  */

console.log(
  gamezone({
    name: "Kosasih",
    histories: [
      "Circus Ball Drop",
      "Circus Ball Drop",
      "Street Basketball",
      "Circus Ball Drop",
      "Lucky Chicken",
      "Street Basketball",
      "Gold Rush",
      "Gold Rush",
      "Gold Rush",
      "Circus Ball Drop",
      "Lucky Chicken",
      "Lucky Chicken",
      "Circus Ball Drop",
      "Street Basketball",
      "Street Basketball",
      "Street Basketball",
      "Gold Rush",
      "Circus Ball Drop",
      "Circus Ball Drop",
      "Gold Rush",
      "Gold Rush",
      "Lucky Chicken",
      "Lucky Chicken",
      "Street Basketball",
      "Street Basketball",
      "Circus Ball Drop",
      "Circus Ball Drop",
      "Circus Ball Drop",
      "Circus Ball Drop",
    ],
  })
);
// /**
//  * {
//     name: 'Kosasih',
//     gameReport: {
//       'Circus Ball Drop': 11,
//       'Street Basketball': 7,
//       'Lucky Chicken': 5,
//       'Gold Rush': 6
//     },
//     prizes: [
//       'Rautan',
//       'Pensil',
//       'Penghapus',
//       'Tempat Pensil',
//       'Celengan',
//       'Buku Tulis',
//       'Penjepit Rambut'
//     ]
//   }
//  */

console.log(
  gamezone({
    name: "Minnie",
    histories: ["Circus Ball Drop", "Circus Ball Drop"],
  })
);

// /**
//  * {
//   name: 'Minnie',
//   gameReport: { 'Circus Ball Drop': 2 },
//   prizes: [ 'Rautan', 'Pensil' ]
// }
//  */

console.log(
  gamezone({
    name: "Marry",
    histories: [
      "Circus Ball Drop",
      "Circus Ball Drop",
      "Race to Witch Mountain",
    ],
  })
);
// Terdapat permainan yang tidak tersedia di gamezone

console.log(gamezone());
// Tidak ada pemain yang bermain
