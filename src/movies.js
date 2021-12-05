// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
let allDirect = array.map(movie => movie.director)
return allDirect
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
let dramaMovies = array.filter(movie => movie.director === `Steven Spielberg` && movie.genre.indexOf(`Drama`)!== -1)
return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0){
    return 0
  }
  else {
let sum = array.reduce((acc, u) => acc + (u.score ? u.score : 0), 0)
avg = sum / array.length
avg = avg.toFixed(2)
return Number(avg)
}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const found = array.find(movie => movie.genre == 'Drama');
  if (found === undefined) {
    return 0
  }
  else { 
  let sum = array.reduce((acc, u) => acc + (u.score && u.genre.indexOf(`Drama`) !== -1 ? u.score : 0), 0)
  let dramaMovies = array.filter(movie => movie.genre.indexOf(`Drama`)!== -1)
avg = sum / dramaMovies.length
avg = avg.toFixed(2)
return Number(avg)
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const array1 = [...array].sort((a, b) => { return a.year - b.year; if (a.year === b.year ) return a.title - b.title })
  return array1
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
 let array1 = [] 
  for (let i = 0; i < array.length ; i++) {
array1.push(array[i].title);
if (array1.length >= 20){
  break
}
  }
  array1.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})
  return array1
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
