function cariModus(arr) {
  // write your code here
  //   console.log(arr);
  let result = -1;
  let modus = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], ">>>");
    let perArr = arr[i];
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(arr[j], "<<<");
      let getPerArr = arr[j];

      if (perArr === getPerArr) {
        count++;
      }
    }
    if (modus < count) {
      modus = count;
      result = perArr;
    }
  }
  if (modus === arr.length || modus === 1 || result === -1) {
    return -1;
  }
  return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
