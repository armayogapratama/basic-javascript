// MAKAN SKUY

function mergeOrder(data) {
  // Your code here
  // console.log(data);
  let getResultOfOrder = [];

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    let getData = data[i];
    let { orders } = getData;
    // console.log(orders);
    let getResultData = [];
    for (let j = 0; j < orders.length; j++) {
      // console.log(orders[j][0], orders[j][1]);
      // let resultData = orders[j];
      let getResultFood = orders[j][0];
      let getResultOrderer = orders[j][1];
      getResultData.push(getResultFood);
      getResultData.push(getResultOrderer);
    }
    getResultOfOrder.push(getResultData);
  }
  return getResultOfOrder;
}

// console.log(
//   mergeOrder([
//     {
//       restaurant: "MekDun",
//       orders: [
//         ["Burger", 200],
//         ["Kentang", 130],
//         ["CocaCola", 400],
//         ["IceCream", 186],
//       ],
//       reviewers: 140,
//     },
//     {
//       restaurant: "Lawmore",
//       orders: [
//         ["Ayam", 126],
//         ["CocaCola", 206],
//         ["Burger", 368],
//         ["IceCream", 80],
//       ],
//       reviewers: 260,
//     },
//     {
//       restaurant: "Burger Queen",
//       orders: [
//         ["Ayam", 85],
//         ["CocaCola", 150],
//         ["Burger", 450],
//         ["Kentang", 20],
//       ],
//       reviewers: 80,
//     },
//   ])
// );

/*
[
  [
    'Burger',   200,
    'Kentang',  130,
    'CocaCola', 400,
    'IceCream', 186
  ],
  [
    'Ayam',     126,
    'CocaCola', 206,
    'Burger',   368,
    'IceCream', 80
  ],
  [ 'Ayam', 85, 'CocaCola', 150, 'Burger', 450, 'Kentang', 20 ],
]
*/

function calculateTotalSales(data) {
  let priceList = [
    { name: "Burger", price: 25000 },
    { name: "Kentang", price: 1000 },
    { name: "Ayam", price: 17000 },
    { name: "CocaCola", price: 7000 },
    { name: "IceCream", price: 3000 },
  ];
  // Your code here
  // console.log(data);
  let getResult = [];

  for (let i = 0; i < data.length; i++) {
    let getTotalSales = 0;
    // console.log(data[i]);
    let getData = data[i];

    // let getTotalPemesan = [];
    // let getPesanan = [];
    for (let j = 0; j < getData.length; j++) {
      // console.log(j, getData[j]);
      let getPerData = getData[j];

      // if (Number(getPerData) && !isNaN(getPerData)) {
      //   getTotalPemesan.push(getPerData);
      // } else {
      //   getPesanan.push(getPerData);
      // }

      for (let k = 0; k < priceList.length; k++) {
        // console.log(priceList[k].price);
        // console.log(priceList[k].name);
        let getPriceList = priceList[k].price; // mengakses value dari price untuk mendapatkan total;
        let getListMenu = priceList[k].name;

        if (getPerData === getListMenu) {
          // console.log(getListMenu, getPerData);
          getTotalSales += getPriceList * getData[j + 1];
        }
      }
    }
    // console.log(getTotalPemesan);
    // console.log(getPesanan);
    // console.log(getTotalSales);
    getResult.push(getTotalSales);
  }

  return getResult;
}

// console.log(
//   calculateTotalSales([
//     ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
//     ["Ayam", 126, "CocaCola", 206, "Burger", 368, "IceCream", 80],
//     ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
//   ])
// );
// [ 8488000, 13024000, 13765000 ]

function calculateTotalVote(data) {
  // Your code here
  // console.log(data);
  let getResultOfOrder = [];

  for (let key in data) {
    // console.log(data[key].reviewers);
    let keyData = data[key].reviewers;

    let totalVote = (keyData * 25) / 100;
    // console.log(totalVote);
    getResultOfOrder.push(totalVote);
  }
  return getResultOfOrder;
}

// console.log(
//   calculateTotalVote([
//     {
//       restaurant: "MekDun",
//       orders: [
//         ["Burger", 200],
//         ["Kentang", 130],
//         ["CocaCola", 400],
//         ["IceCream", 186],
//       ],
//       reviewers: 140,
//     },
//     {
//       restaurant: "Lawmore",
//       orders: [
//         ["Ayam", 126],
//         ["CocaCola", 206],
//         ["Burger", 368],
//         ["IceCream", 80],
//       ],
//       reviewers: 260,
//     },
//     {
//       restaurant: "Burger Queen",
//       orders: [
//         ["Ayam", 85],
//         ["CocaCola", 150],
//         ["Burger", 450],
//         ["Kentang", 20],
//       ],
//       reviewers: 80,
//     },
//   ])
// );
// [ 35, 65, 20 ]

function makanSkuy(data) {
  // Your code here
  // console.log(data);
  if (!data) {
    return `Invalid Data!`;
  }

  if (data.length === 0) {
    return `Tidak ada order, order dulu ngab!`;
  } else {
    let getResultMakanSkuy = {
      OneStar: [],
      TwoStars: [],
      ThreeStars: [],
    };

    let getResultMergeOrder = mergeOrder(data);
    // console.log(getResultMergeOrder);

    let getResultTotalSales = calculateTotalSales(getResultMergeOrder);
    // console.log(getResultTotalSales);

    let getResultTotalVote = calculateTotalVote(data);
    // console.log(getResultTotalVote);

    for (let i = 0; i < data.length; i++) {
      // console.log(data[i]);
      let getData = data[i];
      let getResultSkuy = getData.restaurant;
      // console.log(getResultSkuy);

      if (getResultTotalSales[i] > 20_000_000) {
        if (getResultTotalVote[i] > 100) {
          getResultMakanSkuy.ThreeStars.push(getResultSkuy);
        } else if (
          getResultTotalVote[i] >= 50 &&
          getResultTotalVote[i] <= 100
        ) {
          getResultMakanSkuy.TwoStars.push(getResultSkuy);
        } else if (getResultTotalVote[i] < 50) {
          getResultMakanSkuy.OneStar.push(getResultSkuy);
        }
      } else if (
        getResultTotalSales[i] >= 10_000_000 &&
        getResultTotalSales[i] <= 20_000_000
      ) {
        if (getResultTotalVote[i] > 100) {
          getResultMakanSkuy.ThreeStars.push(getResultSkuy);
        } else if (
          getResultTotalVote[i] >= 50 &&
          getResultTotalVote[i] <= 100
        ) {
          getResultMakanSkuy.TwoStars.push(getResultSkuy);
        } else if (getResultTotalVote[i] < 50) {
          getResultMakanSkuy.OneStar.push(getResultSkuy);
        }
      } else if (getResultTotalSales[i] < 10_000_000) {
        if (getResultTotalVote[i] > 100) {
          getResultMakanSkuy.ThreeStars.push(getResultSkuy);
        } else if (
          getResultTotalVote[i] >= 50 &&
          getResultTotalVote[i] <= 100
        ) {
          getResultMakanSkuy.TwoStars.push(getResultSkuy);
        } else if (getResultTotalVote[i] < 50) {
          getResultMakanSkuy.OneStar.push(getResultSkuy);
        }
      }
    }
    for (const key in getResultMakanSkuy) {
      // console.log(getResultMakanSkuy[key].length);
      if (getResultMakanSkuy[key].length === 0) {
        delete getResultMakanSkuy[key];
      }
    }
    return getResultMakanSkuy;
  }
}

// TEST CASES

console.log(makanSkuy()); // Invalid Data!
console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!

let order1 = [
  {
    restaurant: "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 130],
      ["CocaCola", 400],
      ["IceCream", 186],
    ],
    reviewers: 140,
  },
  {
    restaurant: "Lawmore",
    orders: [
      ["Ayam", 126],
      ["CocaCola", 206],
      ["Burger", 368],
      ["IceCream", 80],
    ],
    reviewers: 260,
  },
  {
    restaurant: "Burger Queen",
    orders: [
      ["Ayam", 85],
      ["CocaCola", 150],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80,
  },
  {
    restaurant: "Pendys",
    orders: [
      ["Ayam", 380],
      ["CocaCola", 246],
      ["Burger", 166],
      ["Kentang", 190],
    ],
    reviewers: 292,
  },
  {
    restaurant: "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 510],
      ["Burger", 699],
      ["Kentang", 274],
    ],
    reviewers: 412,
  },
];

console.log(makanSkuy(order1));
/*
{
  OneStar: [ 'MekDun', 'Burger Queen' ],
  TwoStars: [ 'Lawmore', 'Pendys' ],
  ThreeStars: [ 'Karl Sr' ]
}
*/

let order2 = [
  {
    restaurant: "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 130],
      ["CocaCola", 400],
      ["IceCream", 186],
    ],
    reviewers: 140,
  },
  {
    restaurant: "Lawmore",
    orders: [
      ["Ayam", 326],
      ["CocaCola", 306],
      ["Burger", 468],
      ["IceCream", 280],
    ],
    reviewers: 460,
  },
  {
    restaurant: "Burger Queen",
    orders: [
      ["Ayam", 85],
      ["CocaCola", 150],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80,
  },
  {
    restaurant: "Pendys",
    orders: [
      ["Ayam", 580],
      ["CocaCola", 246],
      ["Burger", 366],
      ["Kentang", 290],
    ],
    reviewers: 432,
  },
  {
    restaurant: "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 510],
      ["Burger", 699],
      ["Kentang", 274],
    ],
    reviewers: 412,
  },
];

console.log(makanSkuy(order2));
/*
{
  OneStar: [ 'MekDun', 'Burger Queen' ],        
  ThreeStars: [ 'Lawmore', 'Pendys', 'Karl Sr' ]
}
*/
let order3 = [
  {
    restaurant: "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 13],
      ["CocaCola", 40],
      ["IceCream", 186],
    ],
    reviewers: 140,
  },
  {
    restaurant: "Lawmore",
    orders: [
      ["Ayam", 326],
      ["CocaCola", 306],
      ["Burger", 68],
      ["IceCream", 280],
    ],
    reviewers: 84,
  },
  {
    restaurant: "Burger Queen",
    orders: [
      ["Ayam", 80],
      ["CocaCola", 10],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80,
  },
  {
    restaurant: "Pendys",
    orders: [
      ["Ayam", 58],
      ["CocaCola", 26],
      ["Burger", 36],
      ["Kentang", 20],
    ],
    reviewers: 20,
  },
  {
    restaurant: "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 51],
      ["Burger", 69],
      ["Kentang", 74],
    ],
    reviewers: 120,
  },
];

console.log(makanSkuy(order3));
/*
{
  OneStar: [ 'MekDun', 'Lawmore', 'Burger Queen', 'Pendys', 'Karl Sr' ]
}
*/
