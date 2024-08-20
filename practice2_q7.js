console.log('Question 7');
const moviesData = [
  { title: 'Movie A', genre: 'Drama', views: 60000, likes: 35000 },
  { title: 'Movie B', genre: 'Comedy', views: 75000, likes: 48000 },
  { title: 'Movie C', genre: 'Action', views: 30000, likes: 25000 },
  { title: 'Movie D', genre: 'Thriller', views: 45000, likes: 30000 },
  { title: 'Movie E', genre: 'Romance', views: 55000, likes: 42000 },
];

function getMoreViewsMovies(data, number) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].views > number) {
      result.push(data[i]);
    }
  }
  return result;
}

function getMoreLikes(data, number) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].views > number) {
      total = total + data[i].likes;
    }
  }
  return total;
}

function generateReport(data) {
  let mostViews = getMoreViewsMovies(data, 50000);
  let moreLikes = getMoreLikes(data, 40000);

  let report = '---- Movie Performance ----';
  report += '\n----More than 50000 views movies----';
  for (let i = 0; i < mostViews.length; i++) {
    report += '\nTitle: ' + mostViews[i].title;
    report += '\nGenre: ' + mostViews[i].genre;
    report += '\nNumber of views: ' + mostViews[i].views;
    report += '\n';
  }

  report +=
    '\nTotal number of likes for movies that have more than 40000 views: ' +
    moreLikes;

  return report;
}

console.log(generateReport(moviesData));
