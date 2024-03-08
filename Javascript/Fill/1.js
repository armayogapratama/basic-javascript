/*
1. siapkan variabel result yang berisi array kosong,
2. buat condition untuk:
a. handle kondisi jika data(wajib) dan value(wajib) bernilai false, display `Invalid input`,
b. jika kondisi bernilai true, maka lanjutkan code
3. buat iterasi while loop dengan variabel i bernilai 0, dan kondisi panjang data
4. buat kondisi untuk menghandle:
a. jika end bernilai false dan nilai i lebih dari sama dengan start, maka push nilai value kedalam variabel result
b. jika end bernilai false dan start bernilai false, maka push nilai value kedalam variabel result
c. selainnya lanjutkan code
5. buat kondisi
a. jika i lebih dari sama dengan start dan i kurang dari end, maka push nilai value kedalam variabel result
b. selainnya push nilai data ke index i kedalam result.
6. increment i
7. kembalikan atau return variabel result,
8. display dan jalankan function fill
*/

function fill(data, value, start, end) {
  // Insert your code here
  let result = [];

  if (!data || !value) {
    //jika saat diinvoke, data atau value === false, maka display `invalid input`
    return `Invalid input`;
  } else {
    let i = 0;
    while (i < data.length) {
      let perData = data[i];

      if (!end && i >= start) {
        // menghendle jika end = false dan i lebih dari start
        result.push(value);
      } else if (!end && !start) {
        result.push(value);
      } else {
        if (i >= start && i < end) {
          result.push(value);
        } else {
          result.push(data[i]);
          // console.log(data[i]);
        }
      }

      i++;
    }
  }
  return result;
}

console.log(fill());
// Invalid input
console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"]));
// Invalid input
console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4));
// [ 'Alpha', 'Beta', 'Echo', 'Echo' ]
console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3));
// [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]
console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20));
// [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]
console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1));
// [ 'Golf', 'Beta', 'Charlie', 'Delta' ]
console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1));
// [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]
console.log(
  fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India")
);
// [ 'India', 'India', 'India', 'India', 'India', 'India' ]
