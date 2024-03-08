function sorting(array) {
  // your code here
  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i]);
    for (let j = i + 1; j < array.length; j++) {
      // console.log(array[i], "===", array[j]);
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function sortingByType(array) {
  // your code here
  let getResult = sorting(array);

  let resultNumber = [];
  let resultString = [];
  let resultBoolean = [];

  for (let i = 0; i < getResult.length; i++) {
    // console.log(i, getResult[i]);
    if (typeof getResult[i] === "number" && !isNaN(getResult[i])) {
      resultNumber.push(getResult[i]);
    } else if (typeof getResult[i] === "string") {
      resultString.push(getResult[i]);
    } else if (typeof getResult[i] === "boolean" && getResult[i] !== NaN) {
      resultBoolean.push(getResult[i]);
    }
  }
  if (
    resultNumber.length === 0 &&
    resultString.length === 0 &&
    resultBoolean.length === 0
  ) {
    return [];
  }

  return [resultNumber, resultString, resultBoolean];
}

function sortAllClean(array) {
  //your code here
  let getResult = sorting(array);
  let getSorting = sortingByType(getResult);

  return getSorting;
}

//do not change the code below
let inputArrSorting = [2, 4, 6, 8, 2, 3];
let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];
let inputArrSortingClean = [
  undefined,
  null,
  456,
  "def",
  NaN,
  [],
  true,
  123,
  "bcd",
  false,
];
console.log(sorting(inputArrSorting)); //[ 2, 2, 3, 4, 6, 8 ]
console.log(sortingByType(inputArrSortingType)); // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
console.log(sortAllClean(inputArrSortingClean)); //[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
console.log(sortAllClean([NaN, undefined])); // []
