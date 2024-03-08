function cariMedian(arr) {
  // you can only write your code here!
  //console.log(arr);
  let ganjil = arr.length / 2;
  //   console.log(ganjil);

  if (arr.length % 2 === 1) {
    return arr[Math.floor(ganjil)];
  } else {
    let angkaDariKanan = arr.length / 2;
    //   console.log(angkaDariKanan);
    let nilaiKanan = arr[angkaDariKanan];
    //   console.log(nilaiKanan);
    let angkaDariKiri = arr.length / 2 - 1;
    //   console.log(angkaDariKiri);
    let nilaiKiri = arr[angkaDariKiri];
    //   console.log(nilaiKiri);
    let median = (nilaiKanan + nilaiKiri) / 2;
    //   console.log(median);
    return median;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
