function calculateAverage(data) {
  // Your code here
  // console.log(data);
  // console.log(data.length);
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    let getData = data[i];
    // console.log(getData);
    let { name, height, age, family } = getData;
    // console.log(name, height, age, family);
    // console.log((total += getData.height));
    if (height) {
      result += height / data.length;
    }
  }
  return Number(result.toFixed(2));
}

// let plantData = [
//   { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
//   { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" },
//   { name: "Mangga Arumanis", height: 10.3, age: 5.5, family: "Anacardiaceae" },
//   { name: "Jeruk Purut", height: 3.3, age: 2.1, family: "Rutaceae" },
//   { name: "Mangga indramayu", height: 6.3, age: 3.6, family: "Anacardiaceae" },
//   { name: "Pisang Ambon", height: 1.2, age: 0.3, family: "Musaceae" },
//   { name: "Mangga Madu", height: 5.3, age: 2.5, family: "Anacardiaceae" },
//   { name: "Pisang Raja", height: 2.3, age: 0.5, family: "Musaceae" },
//   { name: "Jeruk Nipis", height: 2.3, age: 1.4, family: "Rutaceae" },
//   { name: "Mangga Golek", height: 4.7, age: 3.5, family: "Anacardiaceae" },
// ];

// console.log(calculateAverage(plantData));
3.91;

function plantGrouping(data) {
  // Your code here
  // console.log(data);
  if (!data) {
    return `invalid input`;
  }

  if (data.length < 3) {
    return `data tidak lengkap`;
  }

  let result = {};

  let getCalculateAverage = calculateAverage(data);
  // console.log(getCalculateAverage);
  let tertuaSementara = -Infinity;

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    let getData = data[i];
    let { name, height, age, family } = getData;
    // console.log(name, height, age, family);
    // console.log(age);

    if (result[family] === undefined) {
      result[family] = {
        oldestPlant: {
          name: name,
          age: age,
          height: height,
        },
      };
    }
    if (age > tertuaSementara) {
      tertuaSementara = age;
    }
  }
  // console.log(tertuaSementara);
  result.averageHeight = getCalculateAverage;

  return result;
}

let plantData = [
  { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
  { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" },
  { name: "Mangga Arumanis", height: 10.3, age: 5.5, family: "Anacardiaceae" },
  { name: "Jeruk Purut", height: 3.3, age: 2.1, family: "Rutaceae" },
  { name: "Mangga indramayu", height: 6.3, age: 3.6, family: "Anacardiaceae" },
  { name: "Pisang Ambon", height: 1.2, age: 0.3, family: "Musaceae" },
  { name: "Mangga Madu", height: 5.3, age: 2.5, family: "Anacardiaceae" },
  { name: "Pisang Raja", height: 2.3, age: 0.5, family: "Musaceae" },
  { name: "Jeruk Nipis", height: 2.3, age: 1.4, family: "Rutaceae" },
  { name: "Mangga Golek", height: 4.7, age: 3.5, family: "Anacardiaceae" },
];

console.log(plantGrouping(plantData));
/*
{
  Rutaceae: {
    oldestPlant: {
      name: 'Jeruk Purut',
      age: 2.1,
      height: 3.3
    }
  },
  Musaceae: {
    oldestPlant: {
      name: 'Pisang Raja',
      age: 0.5,
      height: 2.3
    }
  },
  Anacardiaceae: {
    oldestPlant: {
      name: 'Mangga Arumanis',
      age: 5.5,
      height: 10.3
    }
  },
  averageHeight: 3.91
}
*/

console.log(
  plantGrouping([
    { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
    { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" },
  ])
);
// data tidak lengkap

console.log(plantGrouping());
// invalid input
