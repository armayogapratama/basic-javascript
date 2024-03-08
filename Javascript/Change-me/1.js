function changeMe(arr) {
  // write your code here
  if (arr.length === 0) {
    console.log("");
  }

  let temp = {};

  for (let i = 0; i < arr.length; i++) {
    // console.log(i, arr[i]);

    let umur = 2023 - arr[i][3];
    let noUmur = "Invalid Birth Year";

    if (arr[i][3] !== undefined) {
      temp.firstName = arr[0][0];
      temp.lastName = arr[0][1];
      temp.gender = arr[0][2];
      temp.age = umur;
    } else {
      temp.firstName = arr[0][0];
      temp.lastName = arr[0][1];
      temp.gender = arr[0][2];
      temp.age = noUmur;
    }
    console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]}:`);
    console.log(temp);
  }
}
// ==========================================
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:n
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// ==========================================
changeMe([]); // ""
