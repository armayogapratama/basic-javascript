function filterMovie(genres) {
  let movies = [
    ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
    ["Action", "Mad Max", "The Batman", "Josh Wick"],
    ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
    ["Comedy", "Safety Last", "The Trip"],
  ];
  // write your code here
  // console.log(genres);
  let getAllFilterMovie = [];

  for (let i = 0; i < genres.length; i++) {
    // console.log(i, "<<", genres[i]);
    let resultGenres = genres[i];
    for (let j = 0; j < movies.length; j++) {
      // console.log(genres[i], "<<", movies[j]);
      let moviesOfGenres = movies[j];
      let resultGenresAll = movies[j][0];
      // console.log(moviesOfGenres, "===", resultGenresAll);
      if (resultGenresAll === resultGenres) {
        getAllFilterMovie.push(moviesOfGenres);
      }
    }
  }
  // console.log(getAllFilterMovie);
  return getAllFilterMovie;
}

// console.log(filterMovie(["Action", "Drama", "Comedy"]));

function usersCanWatch(users) {
  // write your code here
  // console.log(users);

  if (!users) {
    return `Invalid Data!`;
  }

  let { nama, cinema, menu } = users;

  let getResultUsersCanWatch = [];
  let temp = "";

  for (let i = 0; i < menu.length + 1; i++) {
    // console.log(i, "<<", menu[i]);
    if (menu[i] === ";" || menu[i] === undefined) {
      getResultUsersCanWatch.push(temp);
      temp = "";
    } else {
      temp += menu[i];
    }
  }
  // console.log(getResultUsersCanWatch);
  let resultOfFilterMovie = filterMovie(getResultUsersCanWatch);

  if (Array.isArray(resultOfFilterMovie) && resultOfFilterMovie.length === 0) {
    return `Movie not found`;
  }

  return resultOfFilterMovie;
}

// console.log(
//     usersCanWatch({
//         name: "Bari",
//         cinema: "XIV",
//         menu: "Action;Drama;Comedy",
//     })
// );

// TEST CASE
const user1 = {
  name: "Bari",
  cinema: "XIV",
  menu: "Action;Drama;Comedy",
};
console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user2 = {
  name: "Tole",
  cinema: "XIIX",
  menu: "Fantasy;Adventure;Comedy",
};
console.log(usersCanWatch(user2));
/*
[
  ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user3 = {
  name: "Rizky",
  cinema: "Cinepolos",
  menu: "Scifi;Musical",
};
console.log(usersCanWatch(user3));
// // "Movie not found"

console.log(usersCanWatch());
// // "Invalid Data!"
