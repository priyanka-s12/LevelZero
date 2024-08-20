console.log('A5.11_HW_2');
console.log('---- ---- ----');

const productsData = [
  {
    id: 1,
    productName: 'Laptop',
    price2021: 19999,
    price2022: 18999,
    price2023: 15090,
    brand: 'Dell',
    productRating: 5,
  },
  {
    id: 2,
    productName: 'Smartphone',
    price2021: 18999,
    price2022: 17999,
    price2023: 16999,
    brand: 'Samsung',
    productRating: 4,
  },
  {
    id: 3,
    productName: 'SmartWatch',
    price2021: 36999,
    price2022: 32999,
    price2023: 29999,
    brand: 'Apple',
    productRating: 4,
  },
];

console.log('1.1');
function printProductsData(id) {
  let product = getProductDetails(id);

  console.log(
    '===== Details Card for ' +
      product.productName +
      ' =====' +
      '\nID : ' +
      product.id +
      '\n------\n' +
      'Details: ' +
      '\n------\n' +
      'Product Name: ' +
      product.productName +
      '\nPrice in 2021: ' +
      product.price2021 +
      '\nPrice in 2022: ' +
      product.price2022 +
      '\nPrice in 2023: ' +
      product.price2023 +
      '\nBrand: ' +
      product.brand +
      '\nRating: ' +
      product.productRating +
      '\n------ ------ ------\n'
  );
}

function getProductDetails(id) {
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].id === id) {
      return productsData[i];
    }
  }
}

printProductsData(1);
printProductsData(2);
printProductsData(3);
console.log('---- ---- ----');

console.log('1.2');
function getProductsGreaterThanMinPrice(yearPrice, minimumPrice) {
  let result = [];
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i][yearPrice] >= minimumPrice) {
      result.push(productsData[i]);
    }
  }
  return result;
}

console.log(
  'Products with price in 2021 >= 25000: ',
  getProductsGreaterThanMinPrice('price2021', 25000)
);

console.log(
  'Products with price in 2023 >= 16000: ',
  getProductsGreaterThanMinPrice('price2023', 16000)
);

console.log('---- ---- ----');

console.log('1.3');
for (let i = 0; i < productsData.length; i++) {
  let noOfYears = 3;
  let totalPrice =
    productsData[i].price2021 +
    productsData[i].price2022 +
    productsData[i].price2023;

  productsData[i].totalPrice = totalPrice;

  productsData[i].averagePrice = productsData[i].totalPrice / noOfYears;
}
// console.log(productsData)

function getProductsAboveAverage(avgPriceCutoff) {
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].averagePrice > avgPriceCutoff) {
      console.log(
        'Average price of 3 years for ' +
          productsData[i].productName +
          ' is ' +
          productsData[i].averagePrice
      );
    }
  }
}

getProductsAboveAverage(12000);
console.log('---- ---- ----');

console.log('1.4');
function getProductHighestAvgPrice(products) {
  let highestAvgPrice = products[0].averagePrice;
  for (let i = 1; i < products.length; i++) {
    if (products[i].averagePrice > highestAvgPrice) {
      highestAvgPrice = products[i].averagePrice;
      return products[i];
    }
  }
}

console.log(
  'Product that has the highest average price: ',
  getProductHighestAvgPrice(productsData)
);
