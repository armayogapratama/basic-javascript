// const foods = [
//   "Nasi Goreng#20000",
//   "Salmon Mentai",
//   "Gado Gado#10000",
//   "Kupat Tahu#41000",
//   "Wagyu Steak",
//   "Nasi Padang#25000",
//   "Papeda#15000",
//   "Ayam Rebus",
//   "Tempe Goreng#5000",
//   "Tahu Goreng#4000",
// ];

function convertMenu(foods) {
  // code here
  // console.log(foods);
  let getResult = [];

  for (let i = 0; i < foods.length; i++) {
    let getFoods = foods[i];
    // console.log(getFoods);
    let result = [];
    let temp = "";
    for (let j = 0; j < getFoods.length + 1; j++) {
      let foodResult = getFoods[j];
      // console.log(foodResult);
      if (foodResult === "#" || foodResult === undefined) {
        result.push(temp);
        temp = "";
      } else {
        temp += foodResult;
      }
    }
    // console.log(temp);
    // console.log(result);
    getResult.push(result);
  }
  return getResult;
}

// console.log(convertMenu(foods));
/*
 * [
 *  ['Nasi Goreng', '20000'],
 *  ['Salmon Mentai'],
 *  ['Gado gado', '10000'],
 *  ['Kupat tahu', '41000'],
 *  ['Wagyu Steak'],
 *  ['Nasi padang', '25000'],
 *  ['Papeda', '15000'],
 *  ['Ayam rebus'],
 *  ['Tempe goreng', '5000'],
 *  ['Tahu goreng', '4000']
 * ]
 */

// const foods = [
//   ["Nasi Goreng", "20000"],
//   ["Salmon Mentai"],
//   ["Gado gado", "10000"],
//   ["Kupat tahu", "41000"],
//   ["Wagyu Steak"],
//   ["Nasi Padang", "25000"],
//   ["Papeda", "15000"],
//   ["Ayam rebus"],
//   ["Tempe Goreng", "5000"],
//   ["Tahu Goreng", "4000"],
// ];

function filterMenu(foods) {
  // code here
  // console.log(foods);
  let getResult = [];
  for (let i = 0; i < foods.length; i++) {
    let getFoods = foods[i];
    // console.log(getFoods);
    let [name, price] = getFoods;
    // console.log(name, price);
    let getPrice;
    if (typeof price === "string" && price !== undefined) {
      getPrice = Number(price);
    }
    // console.log(getPrice);
    // console.log(getPrice === undefined);
    if (getPrice !== undefined) {
      getResult.push([name, getPrice]);
    }
  }
  return getResult;
}

// console.log(filterMenu(foods));
/*
 * [
 *  ['Nasi Goreng', 20000],
 *  ['Gado gado', 10000],
 *  ['Kupat tahu', 41000],
 *  ['Nasi Padang', 25000],
 *  ['Papeda', 15000],
 *  ['Tempe Goreng', 5000],
 *  ['Tahu Goreng', 4000]
 * ]
 */

// const foods = [
//   ["Nasi Goreng", 20000],
//   ["Gado gado", 10000],
//   ["Kupat tahu", 41000],
//   ["Nasi Padang", 25000],
//   ["Papeda", 15000],
//   ["Tempe Goreng", 5000],
//   ["Tahu Goreng", 4000],
// ];

function statusMenu(foods) {
  // code here
  // console.log(foods);
  let getResult = [];

  for (let i = 0; i < foods.length; i++) {
    let getFoods = foods[i];
    // console.log(getFoods);
    let [name, price] = getFoods;
    // console.log(name, price);
    let result = "";
    if (price > 30000) {
      result += "expensive";
    } else if (price >= 15000 && price <= 30000) {
      result += "standard";
    } else {
      result += "cheap";
    }
    // console.log(result);
    getResult.push([name, price, result]);
  }
  return getResult;
}

// console.log(statusMenu(foods));
/*
 * [
    ['Nasi Goreng', 20000, 'standard'],
    ['Gado gado', 10000, 'cheap'],
    ['Kupat tahu', 41000, 'expensive'],
    ['Nasi Padang', 25000, 'standard'],
    ['Papeda', 15000, 'standard'],
    ['Tempe Goreng', 5000, 'cheap'],
    ['Tahu Goreng', 4000, 'cheap']
  ]
*/

// const foods = [
//   ["Nasi Goreng", 20000, "standard"],
//   ["Gado gado", 10000, "cheap"],
//   ["Kupat tahu", 41000, "expensive"],
//   ["Nasi Padang", 25000, "standard"],
//   ["Papeda", 15000, "standard"],
//   ["Tempe Goreng", 5000, "cheap"],
//   ["Tahu Goreng", 4000, "cheap"],
// ];

function statisticMenu(foods) {
  // code here
  // console.log(foods);
  let result = {};

  for (let i = 0; i < foods.length; i++) {
    let getFoods = foods[i];
    // console.log(getFoods);
    let [name, price, status] = getFoods;
    // console.log(name, price, status);
    if (result[status] === undefined) {
      result[status] = 1;
    } else {
      result[status]++;
    }
  }
  return result;
}

// console.log(statisticMenu(foods));
/*
 * {
 *   standard: 3,
 *   cheap: 3,
 *   expensive: 1
 * }
 */

const foods = [
  "Nasi Goreng#20000",
  "Salmon Mentai",
  "Gado Gado#10000",
  "Kupat Tahu#41000",
  "Wagyu Steak",
  "Nasi Padang#25000",
  "Papeda#15000",
  "Ayam Rebus",
  "Tempe Goreng#5000",
  "Tahu Goreng#4000",
];

function generateMenu(foods) {
  // code here
  // console.log(foods);
  let getConvertMenu = convertMenu(foods);
  // console.log(getConvertMenu);
  let getFilterMenu = filterMenu(getConvertMenu);
  // console.log(getFilterMenu);
  let getStatusMenu = statusMenu(getFilterMenu);
  // console.log(getStatusMenu);
  let getStatisticMenu = statisticMenu(getStatusMenu);
  // console.log(getStatisticMenu);

  let result = {};
  let tempResult = [];

  for (let i = 0; i < getStatusMenu.length; i++) {
    let getResult = {};
    // console.log(getStatusMenu[i]);
    let [name, price, status] = getStatusMenu[i];
    // console.log(name, price, status);
    if (getResult[name] === undefined) {
      getResult["name"] = name;
      getResult["price"] = price;
      getResult["status"] = status;
    }
    // console.log(getResult);
    tempResult.push(getResult);
  }
  result["statistic"] = getStatisticMenu;
  result["menu"] = tempResult;

  return result;
}

console.log(generateMenu(foods));
/**
 * {
      statistic: { standard: 3, cheap: 3, expensive: 1 },
      menu: [
        { name: 'Nasi Goreng', price: 20000, status: 'standard' },
        { name: 'Gado Gado', price: 10000, status: 'cheap' },
        { name: 'Kupat Tahu', price: 41000, status: 'expensive' },
        { name: 'Nasi Padang', price: 25000, status: 'standard' },
        { name: 'Papeda', price: 15000, status: 'standard' },
        { name: 'Tempe Goreng', price: 5000, status: 'cheap' },
        { name: 'Tahu Goreng', price: 4000, status: 'cheap' }
      ]
    }
 */

// Silahkan tulis kode kamu untuk Manipulasi DOM disini
let expensive = document.getElementById("expensiveCount");
let standard = document.getElementById("standardCount");
let cheap = document.getElementById("cheapCount");

expensive.innerText = generateMenu(foods).statistic.expensive;
standard.innerText = generateMenu(foods).statistic.standard;
cheap.innerText = generateMenu(foods).statistic.cheap;

// RENDER DI BROWSER
// selectors
const menuList = document.querySelector(".menu-list");

// ABAIKAN code dibawah ini
function render() {
  // get todo list
  let menuObject = generateMenu(foods);
  // put all task to html
  for (let i = 0; i < menuObject.menu.length; i++) {
    // create div
    const menu = document.createElement("div");
    menu.classList.add("menu");
    // create list
    const newMenu = document.createElement("li");
    newMenu.innerText = `${menuObject.menu[i].name} -- ${new Intl.NumberFormat(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
      }
    ).format(menuObject.menu[i].price)}`;
    newMenu.classList.add("menu-item");
    menu.appendChild(newMenu);

    // create completed button
    const infoButton = document.createElement("button");
    infoButton.innerHTML =
      menuObject.menu[i].status[0].toUpperCase() +
      menuObject.menu[i].status.substring(1);
    if (infoButton.innerHTML === "Cheap") {
      infoButton.classList.add("cheap-btn");
    } else if (infoButton.innerHTML === "Standard") {
      infoButton.classList.add("standard-btn");
    } else {
      infoButton.classList.add("expensive-btn");
    }
    menu.appendChild(infoButton);
    // append to todoList
    menuList.appendChild(menu);
  }
}
render();

// Uncomment baris ini untuk melakukan testing
// Comment juga semua code yang berhubungan dengan DOM untuk menjalankan testing
// module.exports = {
//   convertMenu,
//   filterMenu,
//   statusMenu,
//   statisticMenu,
//   generateMenu,
// };
