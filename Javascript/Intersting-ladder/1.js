function ladder(word) {
  //your code here
  // console.log(word);
  let result = [];

  for (let i = word.length; i > 0; i--) {
    // console.log(word[i])
    let hasil = [];
    for (let j = 0; j < i; j++) {
      // console.log(word[j])
      hasil.push(word[j]);
    }
    result.push(hasil);
  }

  return result;
}

// DRIVER CODE
console.log(ladder("hacktiv8"));
// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]
