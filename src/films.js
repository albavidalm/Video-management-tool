// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((film) => film.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (movies, director) => {
  let directorFilms = movies.filter((film) => film.director === director);
  console.log('EXERCICE 2 ->', directorFilms);
  return directorFilms;
};

// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (movies, director) => {
  /*let directorFilms = movies.filter((film) => film.director === director);
  let scores = directorFilms.map((film) => film.score);
  let directorAverage = parseFloat(
    (scores.reduce((a, b) => a + b) / scores.length).toFixed(2)
  );*/
  //console.log('EXERCICE 3 ->', directorAverage.toFixed(2));
  let scores = getMoviesFromDirector(movies, director).map(
    (film) => film.score
  );
  let directorAverage = parseFloat(
    (scores.reduce((a, b) => a + b) / scores.length).toFixed(2)
  );
  return directorAverage;
};

// Exercise 4:  Alphabetic order by title
const orderAlphabetically = (movies) => {
  let sortedMovies = movies.map((film) => film.title).sort();
  let sortedTwenty = sortedMovies.slice(0, 20);
  return sortedTwenty;
};

// Exercise 5: Order by year, ascending
/*
const orderByYear = (movies) => {
  let sortedYears = [...movies];
  sortedYears.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  return sortedYears;
};
*/

//Same code as up above but refactored
const orderByYear = (movies) => {
  let sortedYears = [...movies];
  sortedYears.sort((a, b) =>
    a.year < b.year ? -1 : a.year === b.year ? (a.title < b.title ? -1 : 1) : 1
  );
  return sortedYears;
};

// Exercise 6: Calculate the average of the movies in a category
const moviesAverageByCategory = (movies, category) => {
  let genreFilms = movies.filter(
    (film) => film.genre.includes(category) && typeof film.score === 'number'
  );
  let scores = genreFilms.map((film) => film.score);
  let genreAverage = parseFloat(
    (scores.reduce((a, b) => a + b) / scores.length).toFixed(2)
  );
  return genreAverage;
};

// Exercise 7: Modify the duration of movies to minutes
const hoursToMinutes = (movies) => {
  let filmDuration = movies.map((film) => {
    let duration = film.duration.split(' ');
    let hoursToMin = parseInt(duration[0]) * 60;
    // let minutes = 0;
    // if (parseInt(duration[1]) > 0) {
    //   minutes = parseInt(duration[1]);
    // }
    let minutes = parseInt(duration[1]) > 0 ? parseInt(duration[1]) : 0;
    let totalMinutes = hoursToMin + minutes;
    return {
      duration: totalMinutes
    };
  });
  return filmDuration;
};

// Exercise 8: Get the best film of a year
const bestFilmOfYear = (movies, year) => {
  let moviesYear = [...movies.filter((film) => film.year === year)];
  let maxScore = 0;
  let bestFilm = [];
  for (let film of moviesYear) {
    film.score > maxScore && (maxScore = film.score) && bestFilm.push(film);
  }
  return bestFilm;
  /* OPTION 1 before refactor
  for (let i = 0; i < moviesYear.length; i++) {
    if (moviesYear[i].score > maxScore) {
      maxScore = moviesYear[i].score;
      bestFilm.push(moviesYear[i]);
    }
  }
  */
  /* OPTION 2 before refactor
  for (let film of moviesYear) {
    if (film.score > maxScore) {
      maxScore = film.score;
      bestFilm.push(film);
    }
  }
*/
};

// The following is required to make unit tests work.

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
