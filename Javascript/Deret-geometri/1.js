function tentukanDeretGeometri(arr) {
  // write your code here

  for (let i = 0; i < arr.length - 1; i++) {
    let perArr = arr[i];
    let rasioGeometri = arr[1] / arr[0];
    // console.log(rasioGeometri);
    if (arr[i + 1] / perArr !== rasioGeometri) {
      return false;
    }
  }
  return true;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([3, 12, 48]));
