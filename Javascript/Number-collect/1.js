function mengelompokkanAngka(arr) {
  // write your code here
  let resultKelipatan = [];
  let resultgenap = [];
  let resultganjil = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(i, "<", perArr);
    let perArr = arr[i];
    if (perArr % 3 === 0) {
      resultKelipatan.push(perArr);
    } else if (perArr % 2 === 0) {
      resultgenap.push(perArr);
    } else if (perArr % 2 === 1) {
      resultganjil.push(perArr);
    } else {
      perArr;
    }
  }
  return [resultgenap, resultganjil, resultKelipatan];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
