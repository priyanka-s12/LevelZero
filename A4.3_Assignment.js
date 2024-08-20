console.log('A4.3_Assignment');
console.log('---- ---- ----');

let product1 = 'Laptop';
let price1 = 999;
let category1 = 'Electronics';

let product2 = 'Running Shoes';
let price2 = 799;
let category2 = 'Footwear';

let product3 = 'T-shirt';
let price3 = 199;
let category3 = 'Clothing';

console.log('Exercise 1');
console.log('---- ---- ----');

function getTotalPrice() {
  return price1 + price2 + price3;
}

let totalPrice = getTotalPrice();
console.log('Total Price of all Products: ', totalPrice);

console.log('---- ---- ----');

console.log('Exercise 2');
console.log('---- ---- ----');

let discount = 0.1;

function calculateDiscount(discount) {
  return price1 - price1 * discount;
}

let discountedPrice1 = calculateDiscount(discount);

console.log(
  'The final price of electronics product after applying discount: ',
  discountedPrice1
);

let finalTotalPrice = discountedPrice1 + price2 + price3;
console.log(
  '\nThe final total price of all products after applying discount: ',
  finalTotalPrice
);

console.log('---- ---- ----');

console.log('Exercise 3');
console.log('---- ---- ----');

let cartSummary =
  '====== Cart Summary ======' +
  '\n' +
  'Product 1: ' +
  product1 +
  '\n' +
  'Price of Product 1: ₹' +
  price1 +
  '\n' +
  'Discount: ' +
  discount +
  '\n' +
  'Final Price of Product 1: ₹' +
  discountedPrice1 +
  '\n\n' +
  'Product 2: ' +
  product2 +
  '\n' +
  'Price of Product 2: ₹' +
  price2 +
  '\n' +
  'Discount: ' +
  '0' +
  '\n' +
  'Final Price of Product 2: ₹' +
  price2 +
  '\n\n' +
  'Product 3: ' +
  product3 +
  '\n' +
  'Price of Product 3: ₹' +
  price3 +
  '\n' +
  'Discount: ' +
  '0' +
  '\n' +
  'Final Price of Product 3: ₹' +
  price3 +
  '\n\n' +
  'Total Cart Price: ₹' +
  finalTotalPrice;

console.log(cartSummary);
