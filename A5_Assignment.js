console.log('A5_Assignment');
console.log('---- ---- ----');

console.log('1.1');
const movieRecords = [
  {
    name: 'Kabhi Khushi Kabhi Gham',
    genre: 'Drama',
    boxOffice: 500,
    satelliteRights: 120,
    ottRights: 70,
    musicRights: 20,
  },
  {
    name: 'Dilwale Dulhania Le Jayenge',
    genre: 'Romance',
    boxOffice: 550,
    satelliteRights: 130,
    ottRights: 80,
    musicRights: 25,
  },
  {
    name: '3 Idiots',
    genre: 'Comedy',
    boxOffice: 600,
    satelliteRights: 140,
    ottRights: 90,
    musicRights: 30,
  },
  {
    name: 'Bajrangi Bhaijaan',
    genre: 'Action',
    boxOffice: 700,
    satelliteRights: 160,
    ottRights: 100,
    musicRights: 40,
  },
  {
    name: 'Padmaavat',
    genre: 'Historical',
    boxOffice: 800,
    satelliteRights: 180,
    ottRights: 110,
    musicRights: 45,
  },
];

console.log(movieRecords);
console.log('---- ---- ----');

console.log('1.2');
function totalCost(movieRecords) {
  for (let i = 0; i < movieRecords.length; i++) {
    let totalCost =
      movieRecords[i].boxOffice +
      movieRecords[i].satelliteRights +
      movieRecords[i].ottRights +
      movieRecords[i].musicRights;

    movieRecords[i].totalCost = totalCost;
  }
}

totalCost(movieRecords);
console.log('Added totalCost field to objects: ', movieRecords);
console.log('---- ---- ----');

console.log('1.3');
function generateCostCard(movies) {
  let report = '===== Movie Cost Card =====\n';
  for (let i = 0; i < movies.length; i++) {
    report += 'Name: ' + movies[i].name + '\n';
    report += 'Genre: ' + movies[i].genre + '\n';
    report += 'Total Cost: ' + movies[i].totalCost + '\n';
    report += '------\n';
  }
  return report;
}

console.log(generateCostCard(movieRecords));
console.log('---- ---- ----');

console.log('1.4');

function getExpensiveMovie(movies) {
  let expesiveMovie = movies[0];
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].totalCost > expesiveMovie.totalCost) {
      expesiveMovie = movies[i];
    }
  }
  return expesiveMovie;
}

function calculateTotalCost(movies) {
  let totalCost = 0;
  for (let i = 0; i < movies.length; i++) {
    totalCost = totalCost + movies[i].totalCost;
  }
  return totalCost;
}

function calculateAverage(movies, mediumName) {
  let totalCost = 0;
  for (let i = 0; i < movies.length; i++) {
    totalCost = totalCost + movies[i][mediumName];
  }
  return totalCost / movies.length;
}

function generateMovieReport(movieRecords) {
  let expensiveMovie = getExpensiveMovie(movieRecords);
  let totalCostOfAll = calculateTotalCost(movieRecords);
  let boxOfficeAverage = calculateAverage(movieRecords, 'boxOffice');
  let satelliteAverage = calculateAverage(movieRecords, 'satelliteRights');
  let ottAverage = calculateAverage(movieRecords, 'ottRights');
  let musicAverage = calculateAverage(movieRecords, 'musicRights');

  let report = '===== Movie Report =====\n';
  report += 'Most Expensive Movie\n';
  report += '------\n';
  report += 'Name: ' + expensiveMovie.name + '\n';
  report += 'Genre: ' + expensiveMovie.genre + '\n';
  report += 'Total Cost: ' + expensiveMovie.totalCost + '\n';
  report += '------\n';
  report += 'Movie Average\n';
  report += '------\n';
  report += 'Total Cost of All Movies: ' + totalCostOfAll + '\n';
  report +=
    'Total Average Cost of all movies: ' +
    totalCostOfAll / movieRecords.length +
    '\n';
  report += '------\n';
  report += 'Total Box Office Average: ' + boxOfficeAverage + '\n';
  report += 'Total Satellite Rights Average: ' + satelliteAverage + '\n';
  report += 'Total OTT Average: ' + ottAverage + '\n';
  report += 'Total Music Rights Average: ' + musicAverage + '\n';

  return report;
}

console.log(generateMovieReport(movieRecords));
