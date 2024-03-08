function convertSymbol(arr) {
  // code here
  let getResult = [];
  let angka = ")!@#$%^&*(";

  for (let i = 0; i < arr.length; i++) {
    // console.log(i, "<<", arr[i]);
    let resultArr = "";
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i], arr[i][j]);
      for (let k = 0; k < angka.length; k++) {
        // console.log(arr[i][j], angka[k]);
        if (arr[i][j] === angka[k]) {
          resultArr += k;
        }
      }
    }
    getResult.push(Number(resultArr));
  }
  // console.log(getResult);
  return getResult;
}

function decrementOdd(arr) {
  // code here
  // let resultOfConvertSymbol = convertSymbol(arr);

  let result = [];

  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    // console.log(i, arr[i]);
    if (arr[i] % 2 === 1) {
      result.push(arr[i] - arr.length);
    } else {
      result.push(arr[i]);
    }
  }
  // console.log(result);
  return result;
}

function splitNumber(arr) {
  // code here
  // let resultOfSplitNumber = decrementOdd(arr);
  // console.log(arr);
  let resultSplit = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(i, "<<", arr[i]);
    if (arr[i] <= 26) {
      temp.push(arr[i]);
    }

    if (arr[i] > 26 || i === arr.length - 1) {
      resultSplit.push(temp);
      temp = [];
    }
  }
  // console.log(resultSplit);
  return resultSplit;
}

function convertNumber(arr) {
  // code here
  // console.log(arr);
  let resultOfConverNumber = "";
  let dict = " abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < arr.length; i++) {
    // console.log(i, "<<", arr[i]);
    let word = "";
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i], "<<", arr[i][j]);
      for (let k = 1; k < dict.length; k++) {
        // console.log(arr[i][j], "<<", k, dict[k]);
        if (arr[i][j] === k) {
          word += dict[k];
        }
      }
    }
    if (arr[i] !== " ") {
      if (i === arr.length - 1) {
        resultOfConverNumber += word;
      } else {
        resultOfConverNumber += word + " ";
      }
    }
  }
  // console.log(resultOfConverNumber);
  return resultOfConverNumber;
}

function result(arr) {
  // code here
  let resultConvertSymbol = convertSymbol(arr);
  let resultDecrementOdd = decrementOdd(resultConvertSymbol);
  let resultSplitNumber = splitNumber(resultDecrementOdd);
  let resultConvertNumber = convertNumber(resultSplitNumber);

  return resultConvertNumber;
}

console.log(
  result([
    "!@",
    "!&",
    "@)",
    "#!",
    "&#",
    "!(",
    "@&",
    "%%",
    "!(",
    "##",
    "#&",
    "@^",
  ]) // lets go guyz
);

console.log(
  result(["!(", "#&", "!@", "@%", "@@", "!%", "&#", "#%", "@%", "#!"]) // i love you
);

console.log(
  result(["!%", "@&", "$", "!&", "$#", "*", "!#", "!%", "@#", "@)", "@!", "@@"]) // code hacktiv
);
