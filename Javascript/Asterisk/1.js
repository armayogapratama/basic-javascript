let rows1 = 5;
// do loops using rows1 variable to display asterisks in the console.
// insert your code here
for (i = 0; i < rows1; i++) {
  let star = "*";
  star += "";
  // for (j = 0; j <= i; j++) {
  //     star += "*";
  // }
  console.log(star);
}

let rows2 = 5;
// do loops using rows2 variable to display asterisks in the console.
// insert your code here
for (i = 0; i < rows2; i++) {
  let star = "";
  for (j = 0; j <= rows2; j++) {
    star += "*";
  }
  console.log(star);
}

let rows3 = 5;
// do loops using rows3 variable to display asterisks in the console.
// insert your code here
for (i = 0; i < rows3; i++) {
  let star = "";
  for (j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

let rows4 = 5;
// do loops using rows4 variable to display asterisks in the console.
// insert your code here
for (i = rows4; i >= 0; i--) {
  let star = "";
  for (j = i; j >= 0; j--) {
    star += "*";
  }
  console.log(star);
}
