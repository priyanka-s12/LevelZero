console.log('Practice set 2');
console.log('---- ---- ----');

const customersOrders = [
  {
    name: 'Alice',
    tableNo: 101,
    mainCourse: 15.99,
    appetizer: 8.49,
    dessert: 5.99,
    beverage: 2.99,
  },
  {
    name: 'Bob',
    tableNo: 102,
    mainCourse: 12.49,
    appetizer: 6.99,
    dessert: 4.49,
    beverage: 1.99,
  },
  {
    name: 'Charlie',
    tableNo: 103,
    mainCourse: 18.99,
    appetizer: 9.99,
    dessert: 7.49,
    beverage: 3.99,
  },
  {
    name: 'David',
    tableNo: 104,
    mainCourse: 14.99,
    appetizer: 7.49,
    dessert: 6.49,
    beverage: 2.49,
  },
  {
    name: 'Eve',
    tableNo: 105,
    mainCourse: 16.49,
    appetizer: 8.99,
    dessert: 5.49,
    beverage: 2.79,
  },
];
console.log('Question 1');
console.log('a.');
function calculateCost(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total =
      data[i].mainCourse +
      data[i].appetizer +
      data[i].dessert +
      data[i].beverage;

    data[i].totalCost = total;
  }
}

calculateCost(customersOrders);
console.log('Added totalCost field: ', customersOrders);
console.log('---- ---- ----');

console.log('b.');
function getNames(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].totalCost > 30) {
      console.log(data[i].name);
    }
  }
}
console.log('Names of customers whose totalCost is above $30: ');
getNames(customersOrders);
console.log('---- ---- ----');

console.log('Question 2');
const movieData = [
  { movieName: 'Movie 1', rating: 3.5, boxOfficeRevenue: 15000000 },
  { movieName: 'Movie 2', rating: 4.2, boxOfficeRevenue: 25000000 },
  { movieName: 'Movie 3', rating: 4.8, boxOfficeRevenue: 35000000 },
  { movieName: 'Movie 4', rating: 3.0, boxOfficeRevenue: 12000000 },
  { movieName: 'Movie 5', rating: 4.5, boxOfficeRevenue: 20000000 },
];

console.log('a.');
function getAvgRating(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].rating;
  }
  return total / data.length;
}
console.log('Average rating of movies: ', getAvgRating(movieData));
console.log('---- ---- ----');

console.log('b.');
function getTotalRevenue(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].boxOfficeRevenue;
  }
  return total;
}
console.log('Total revenue: ', getTotalRevenue(movieData));
