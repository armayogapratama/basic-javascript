function urutkanAbjad(str) {
  // you can only write your code here!
  let getArray = ubahStringJadiArray(str);
  // console.log(getArray);
  let resultUrut = mengurutkanIsiArray(getArray);
  // console.log(resultUrut);
  let getString = ubahArrayJadiString(resultUrut);
  // console.log(getString);

  return getString;
}

function ubahStringJadiArray(str) {
  //code
  let result = [];
  for (let i = 0; i < str.length; i++) {
    // console.log(i, str[i]);
    result.push(str[i]);
  }
  return result;
}

function mengurutkanIsiArray(str) {
  //code

  for (let i = 0; i < str.length; i++) {
    // console.log(i, str[i]);
    for (let j = i + 1; j < str.length; j++) {
      // console.log(str[i], str[j]);
      if (str[i] > str[j]) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }
  return str;
}

function ubahArrayJadiString(str) {
  //code
  let resultArrayToString = "";

  for (let i = 0; i < str.length; i++) {
    // console.log(i, str[i]);
    resultArrayToString += str[i];
  }
  return resultArrayToString;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
