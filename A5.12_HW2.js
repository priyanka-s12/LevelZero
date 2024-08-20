console.log('A5.12_HW_2');
console.log('---- ---- ----');

const productsData = [
  {
    id: 101,
    name: 'Laptop',
    price: 999.99,
    brand: 'Dell',
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 102,
    name: 'Smartphone',
    price: 599.99,
    brand: 'Samsung',
    category: 'Electronics',
    rating: 4.0,
  },
  {
    id: 103,
    name: 'Running Shoes',
    price: 79.99,
    brand: 'Nike',
    category: 'Footwear',
    rating: 4.8,
  },
  {
    id: 104,
    name: 'T-shirt',
    price: 19.99,
    brand: 'Adidas',
    category: 'Apparel',
    rating: 4.2,
  },
  {
    id: 105,
    name: 'Coffee Maker',
    price: 49.99,
    brand: 'Hamilton',
    category: 'Kitchen Appliances',
    rating: 4.6,
  },
];

function getExpensiveProduct(details) {
  let expensiveProduct = details[0];
  for (let i = 1; i < details.length; i++) {
    if (details[i].price > expensiveProduct.price) {
      expensiveProduct = details[i];
    }
  }
  return expensiveProduct;
}

function getElectronicsProducts(details) {
  let totalElectronics = 0;
  for (let i = 0; i < details.length; i++) {
    if (details[i].category === 'Electronics') {
      totalElectronics = totalElectronics + 1;
    }
  }
  return totalElectronics;
}

function calculateAveragePrice(details) {
  let totalPrice = 0;
  for (let i = 0; i < details.length; i++) {
    totalPrice = totalPrice + details[i].price;
  }
  return totalPrice / details.length;
}

function calculateAverageRating(details) {
  let rating = 0;
  for (let i = 0; i < details.length; i++) {
    rating = rating + details[i].rating;
  }
  return rating / details.length;
}

function getHighestRatingProduct(details) {
  let highRating = details[0];
  for (let i = 1; i < details.length; i++) {
    if (details[i].rating > highRating.rating) {
      highRating = details[i];
    }
  }
  return highRating;
}

function printProductAnalysisReport(productsData) {
  let expensive = getExpensiveProduct(productsData);
  let totalElectronicsProducts = getElectronicsProducts(productsData);
  let averagePrice = calculateAveragePrice(productsData);
  let averageRating = calculateAverageRating(productsData);
  let highestRating = getHighestRatingProduct(productsData);

  let report = '====== Product Analysis ======\n';
  report += 'Most Expensive Product Details';
  report += '\n------\n';
  report += 'Name: ' + expensive.name + '\n';
  report += 'Price: ₹' + expensive.price + '\n';
  report += 'Brand: ' + expensive.brand + '\n';
  report += 'Category: ' + expensive.category + '\n';
  report += 'Rating: ' + expensive.rating;
  report += '\n---- ---- ----\n\n';
  report += 'Totals and Averages' + '\n------\n';
  report += 'Total Electronic Products: ' + totalElectronicsProducts + '\n';
  report += 'Average Price: ₹' + averagePrice + '\n';
  report += 'Average rating: ' + averageRating;
  report += '\n---- ---- ----\n\n';
  report += 'Product with Highest Rating' + '\n------\n';
  report += 'Name: ' + highestRating.name + '\n';
  report += 'Price: ₹' + highestRating.price + '\n';
  report += 'Brand: ' + highestRating.brand + '\n';
  report += 'Category: ' + highestRating.category + '\n';
  report += 'Rating: ' + highestRating.rating;
  report += '\n---- ---- ----\n\n';
  report += 'Products with Price Less than ₹50' + '\n------\n';

  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].price < 50) {
      report += 'Name: ' + productsData[i].name;
      report += '\nPrice: ₹' + productsData[i].price;
      report += '\nBrand: ' + productsData[i].brand;
      report += '\nCategory: ' + productsData[i].category;
      report += '\nRating: ' + productsData[i].rating;
      report += '\n---\n';
    }
  }

  return report;
}

console.log(printProductAnalysisReport(productsData));
