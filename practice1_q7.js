console.log('Question 7');
const customerData = [
  {
    customerName: 'Alice',
    age: 28,
    address: '123 Street',
    city: 'A',
    totalPurchases: 5,
  },
  {
    customerName: 'Bob',
    age: 35,
    address: '456 Avenue',
    city: 'D',
    totalPurchases: 8,
  },
  {
    customerName: 'Charlie',
    age: 40,
    address: '789 Road',
    city: 'C',
    totalPurchases: 12,
  },
  {
    customerName: 'Daisy',
    age: 32,
    address: '111 Lane',
    city: 'D',
    totalPurchases: 6,
  },
  {
    customerName: 'Emily',
    age: 45,
    address: '222 Boulevard',
    city: 'A',
    totalPurchases: 10,
  },
  {
    customerName: 'Charmie',
    age: 37,
    address: '113 Lane',
    city: 'D',
    totalPurchases: 10,
  },
];

console.log('a.');
function getTotalPurchases(data, cityName) {
  let totalPurchases = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].city === cityName)
      totalPurchases = totalPurchases + data[i].totalPurchases;
  }
  console.log(
    'Total number of purchases made from city ' +
      cityName +
      ' are ' +
      totalPurchases
  );
  // return totalPurchases
}

getTotalPurchases(customerData, 'A');
console.log('---- ---- ----');

console.log('b.');

function getAvgAge(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].age;
  }
  return total / data.length;
}
console.log('Average age: ', getAvgAge(customerData));
console.log('---- ---- ----');

console.log('c.');
function calculateTotalPurchases(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    // if(data[i].city === "D"){
    //   total = total + data[i].totalPurchases
    // }
    // if(data[i].city === "C"){
    //    total = total + data[i].totalPurchases
    // }
    if (data[i].city === 'D' || data[i].city === 'C') {
      total = total + data[i].totalPurchases;
    }
  }
  return total;
}

console.log(
  'Total purchases from D and C: ',
  calculateTotalPurchases(customerData)
);
console.log('---- ---- ----');

console.log('d.');
function getAvgAge(data) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].city === 'D') {
      count = count + 1;
      total = total + data[i].age;
    }
  }
  // console.log("count: ", count)
  return total / count;
}

console.log('Average age of city D: ', getAvgAge(customerData));
console.log('---- ---- ----');

console.log('Question 8');
const salesData = [
  { product: 'Product A', unitsSold: 120, revenue: 15000 },
  { product: 'Product B', unitsSold: 180, revenue: 20000 },
  { product: 'Product C', unitsSold: 90, revenue: 12000 },
  { product: 'Product D', unitsSold: 150, revenue: 18000 },
  { product: 'Product E', unitsSold: 200, revenue: 25000 },
];

console.log('a.');
function getMoreRevenue(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].revenue > 19000) {
      result.push(data[i]);
    }
  }
  return result;
}

console.log(
  'Products which made revenue more than 190000 ',
  getMoreRevenue(salesData)
);
console.log('---- ---- ----');

console.log('b.');
function calculateTotalUnitsSold(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].revenue > 15000) {
      total = total + data[i].unitsSold;
    }
  }
  return total;
}
console.log(
  'Total units sold for products that made revenue more than 15000: ',
  calculateTotalUnitsSold(salesData)
);
