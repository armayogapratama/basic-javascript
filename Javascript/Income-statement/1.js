function generateIngredients(ingredientsRaw) {
  // Your code here
  // console.log(ingredientsRaw);
  let getResult = [];

  for (let i = 0; i < ingredientsRaw.length; i++) {
    let getData = ingredientsRaw[i];
    // console.log(getData);
    let [menu, ratio, ingredients, cost] = getData;
    // console.log(menu, ratio, ingredients, cost);
    let getIngredientsRaw = {};

    if (getIngredientsRaw[getData] === undefined) {
      getIngredientsRaw = {};
    }
    getIngredientsRaw["menu"] = menu;
    getIngredientsRaw["ratio"] = ratio;
    getIngredientsRaw["ingredients"] = ingredients;
    getIngredientsRaw["cost"] = cost;

    // console.log(getIngredientsRaw);
    getResult.push(getIngredientsRaw);
  }
  return getResult;
}

// const rawData = [
//   ["Bakso Spesial", 20, 6, 130000],
//   ["Mie Ayam Combo", 100, 3, 20000],
//   ["Mia Ayam Spesial", 500, 5, 40000],
// ];
// console.log(generateIngredients(rawData));
/*
  [
    {
      menu: 'Bakso Spesial',
      ratio: 20,
      ingredients: 6,
      cost: 130000 }, 
    {
      menu: 'Mie Ayam Combo',
      ratio: 100,
      ingredients: 3,
      cost: 20000
    },
    {
      menu: 'Mie Ayam Spesial',
      ratio: 500,
      ingredients: 5,
      cost: 40000 
    }
  ]
*/

function calculateRawCost(ingredientsData) {
  // Your code here
  // console.log(ingredientData);
  let result = [];

  for (let i = 0; i < ingredientsData.length; i++) {
    let getIngredientData = ingredientsData[i];
    // console.log(getIngredientData);
    let { menu, ratio, ingredients, cost } = getIngredientData;
    // console.log(menu, ratio, ingredients, cost);
    let getResult = {};

    if (getResult[getIngredientData] === undefined) {
      getResult["menu"] = menu;
      getResult["stock"] = (ingredients * 1000) / ratio;
      getResult["investment"] = cost * ingredients;
    }
    result.push(getResult);
    // console.log(getResult);
  }
  return result;
}

// console.log(
//   calculateRawCost([
//     {
//       menu: "Bakso Spesial",
//       ratio: 20,
//       ingredients: 6,
//       cost: 130000,
//     },
//     {
//       menu: "Mie Ayam Combo",
//       ratio: 100,
//       ingredients: 3,
//       cost: 20000,
//     },
//     {
//       menu: "Mie Ayam Spesial",
//       ratio: 500,
//       ingredients: 5,
//       cost: 40000,
//     },
//   ])
// );
/*
  [
    {
      menu: 'Bakso Spesial',
      stock: 300,
      investment: 780000
    },
    {
      menu: 'Mie Ayam Combo',
      stock: 30,
      investment: 60000
    },
    {
      menu: 'Mie Ayam Spesial',
      stock: 10,
      investment: 200000
    }
  ]
*/

function calculateROI(costData, ordersData) {
  // Your code here
  // console.log(costData, ordersData);
  let result = [];
  for (let i = 0; i < costData.length; i++) {
    let getCost = costData[i];
    // console.log(getCost);
    let { menu, stock, investment } = getCost;
    // console.log(menu, stock, investment);
    let getResult = {};
    // console.log(getResult[getCost]);

    getResult["menu"] = menu;
    getResult["stock"] = stock;
    getResult["investment"] = investment;
    getResult["sales"] = 0;

    // console.log(getResult);
    for (let j = 0; j < ordersData.length; j++) {
      let getOrders = ordersData[j];
      // console.log(getOrders);
      let { menuItem, price, amount } = getOrders;
      // console.log(menuItem, price, amount);
      if (menu === menuItem) {
        // console.log(getOrders);
        if (getResult.stock >= amount) {
          getResult["stock"] -= amount;
          if (stock !== 0) {
            getResult["sales"] += price * amount;
          }
          getResult["profit"] = getResult["sales"] - investment;
          getResult["roi"] =
            ((getResult["profit"] / investment) * 100).toFixed(2) + "%";
        }
      }
    }
    // console.log(getResult);
    result.push(getResult);
  }
  return result;
}

// const orderHistories = [
//   {
//     menuItem: "Bakso Spesial",
//     price: 20000,
//     amount: 260,
//   },
//   {
//     menuItem: "Bakso Spesial",
//     price: 20000,
//     amount: 12,
//   },
//   {
//     menuItem: "Mie Ayam Combo",
//     price: 18000,
//     amount: 20,
//   },
//   {
//     menuItem: "Mie Ayam Spesial",
//     price: 12000,
//     amount: 6,
//   },
// ];

// console.log(
//   calculateROI(
//     [
//       {
//         menu: "Bakso Spesial",
//         stock: 300,
//         investment: 780000,
//       },
//       {
//         menu: "Mie Ayam Combo",
//         stock: 30,
//         investment: 60000,
//       },
//       {
//         menu: "Mie Ayam Spesial",
//         stock: 10,
//         investment: 200000,
//       },
//     ],
//     orderHistories
//   )
// );

/*
  [
  {
    menu: 'Bakso Spesial',
    stock: 28,
    investment: 780000,
    sales: 5440000,
    profit: 4660000,
    roi: '597.44%'
  },
  {
    menu: 'Mie Ayam Combo',
    stock: 10,
    investment: 60000,
    sales: 360000,
    profit: 300000,
    roi: '500.00%'
  },
  {
    menu: 'Mie Ayam Spesial',
    stock: 4,
    investment: 200000,
    sales: 72000,
    profit: -128000,
    roi: '-64.00%'
  }
]
*/

function incomeStatement(rawIngredients, orders) {
  // Your code here
  // console.log(rawIngredients, orders);
  if (!rawIngredients && !orders) {
    return `Invalid data`;
  }

  if (rawIngredients.length === 0 && orders.length === 0) {
    return `Data is empty`;
  }

  let getGenerateIngredients = generateIngredients(rawIngredients);
  // console.log(getGenerateIngredients);
  let getCalculateRawCost = calculateRawCost(getGenerateIngredients);
  // console.log(getCalculateRawCost);
  let getCalculateROI = calculateROI(getCalculateRawCost, orders);
  // console.log(getCalculateROI);

  return getCalculateROI;
}

const rawData = [
  ["Bakso Spesial", 20, 6, 130_000],
  ["Mie Ayam Combo", 100, 3, 20_000],
  ["Mia Ayam Spesial", 500, 5, 40_000],
];

const orderHistories = [
  {
    menuItem: "Bakso Spesial",
    price: 20_000,
    amount: 260,
  },
  {
    menuItem: "Bakso Spesial",
    price: 20_000,
    amount: 12,
  },
  {
    menuItem: "Mie Ayam Combo",
    price: 18_000,
    amount: 20,
  },
  {
    menuItem: "Mia Ayam Spesial",
    price: 12_000,
    amount: 6,
  },
  {
    menuItem: "Mia Ayam Spesial",
    price: 12_000,
    amount: 5,
  },
];

// console.log(incomeStatement());
// Invalid data

// console.log(incomeStatement([], []));
// Data is empty

console.log(incomeStatement(rawData, orderHistories));
/*
[
  {
    menu: 'Bakso Spesial',
    stock: 28,
    investment: 780000,
    sales: 5440000,
    profit: 4660000,
    roi: '5.97%'
  },
  {
    menu: 'Mie Ayam Combo',        
    stock: 10,
    investment: 60000,
    sales: 360000,
    profit: 300000,
    roi: '5.00%'
  },
  {
    menu: 'Mia Ayam Spesial',      
    stock: 4,
    investment: 200000,
    sales: 72000,
    profit: -128000,
    roi: '-0.64%'
  }
]
*/
