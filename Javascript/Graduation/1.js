function graduates(students) {
  // you can only write your code here!
  // console.log(students);
  let getResultGraduates = {};

  for (let i = 0; i < students.length; i++) {
    // console.log(students[i]);
    let getStudents = students[i];
    let { name, score, class: kelas } = getStudents;
    if (getResultGraduates[kelas] === undefined) {
      getResultGraduates[kelas] = [];
    }
    if (score > 75) {
      getResultGraduates[kelas].push({ name, score });
    } else if (getResultGraduates[kelas] === undefined) {
      getResultGraduates[kelas] = [];
    }
  }

  return getResultGraduates;
}

// TEST CASE 1
let input1 = [
  { name: "Dimitri", score: 90, class: "foxes" },
  { name: "Alexei", score: 85, class: "wolves" },
  { name: "Sergei", score: 74, class: "foxes" },
  { name: "Anastasia", score: 78, class: "wolves" },
];
console.log(graduates(input1));

// TEST CASE 2
let input2 = [
  { name: "Rin", score: 100, class: "foxes" },
  { name: "Saber", score: 80, class: "wolves" },
  { name: "Gilgamesh", score: 30, class: "foxes" },
  { name: "Ishtar", score: 50, class: "wolves" },
];
console.log(graduates(input2));

// TEST CASE 3
let input3 = [
  { name: "Alexander", score: 100, class: "foxes" },
  { name: "Alisa", score: 76, class: "wolves" },
  { name: "Vladimir", score: 92, class: "foxes" },
  { name: "Albert", score: 71, class: "wolves" },
  { name: "Viktor", score: 80, class: "tigers" },
];
console.log(graduates(input3));

// TEST CASE 4
console.log(graduates([]));
