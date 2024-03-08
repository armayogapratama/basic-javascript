function filterReceipt(ingredients) {
  let receipts = [
    ["Dimsum", "Udang", "Ayam", "Kepiting"],
    ["Ayam Geprek", "Ayam", "Sambal", "Bawang"],
    ["Chicken Katsu", "Ayam", "Tepung Roti", "Terigu"],
    ["Kebab", "Daging Sapi", "Tortilla"],
    ["Bakso", "Daging Sapi", "Terigu"],
  ];
  // write your code here
  // console.log(ingredients);
  let getResult = [];

  for (let i = 0; i < ingredients.length; i++) {
    // console.log(ingredients[i]);
    let getIngredients = ingredients[i];
    // console.log(getResultOfReceipts);

    for (let j = 0; j < receipts.length; j++) {
      // console.log(getReceipts[j]);
      let getOfGetReceipts = receipts[j];
      let valueOfGetReceipts = getOfGetReceipts[0];
      if (valueOfGetReceipts === getIngredients) {
        getResult.push(getOfGetReceipts);
        break;
      }
    }
  }
  return getResult;
}

// console.log(filterReceipt([ "Chicken Katsu", "Kebab", "Bakso" ]));

// console.log(filterReceipt([ "Mie", "Pangsit" ]));

function usersCanCook(users) {
  // write your code here
  // console.log(users);
  if (!users) {
    return `Invalid Data!`;
  }

  let { menu } = users;

  let getResultCook = filterReceipt(menu);

  if (getResultCook.length === 0) {
    return `Menu not found`;
  }

  return getResultCook;
}

// TEST CASES
let users1 = {
  name: "Fajrin",
  resto: "Fajrin Food",
  menu: ["Chicken Katsu", "Kebab", "Bakso"],
};
console.log(usersCanCook(users1));
/*
[
  [ 'Chicken Katsu', 'Ayam', 'Tepung Roti', 'Terigu' ],
  [ 'Kebab', 'Daging Sapi', 'Tortilla' ],
  [ 'Bakso', 'Daging Sapi', 'Terigu' ]
]
*/

let users2 = {
  name: "Ihsan",
  resto: "Ihsan Resto",
  menu: ["Dimsum", "Ayam Geprek", "Kopi"],
};
console.log(usersCanCook(users2));
/*
[
  [ 'Dimsum', 'Udang', 'Ayam', 'Kepiting' ],
  [ 'Ayam Geprek', 'Ayam', 'Sambal', 'Bawang' ]
]
*/

let users3 = {
  name: "Rizka",
  resto: "Rizka Cafe",
  menu: ["Mie", "Pangsit"],
};
console.log(usersCanCook(users3));
// "Menu not found"

console.log(usersCanCook());
// "Invalid Data!"
