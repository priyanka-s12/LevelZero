console.log('A3.1_HW_1');
console.log('---- ---- ----');

// age verification
console.log('1.1');
let age = 18;
let isAdult = true;

if (isAdult) {
  console.log('Adult');
}
console.log('Age:', age);
console.log('---- ---- ----');

//movie ticket pricing
console.log('1.2');
let customerAge = 22;
let baseTicketPrice = 200;

if (customerAge <= 18) {
  baseTicketPrice = baseTicketPrice - baseTicketPrice * 0.2;
  console.log(
    'Ticket price for age less than or equal to 18: ₹',
    baseTicketPrice
  );
} else {
  console.log('Ticket price for age greater than 18: ₹', baseTicketPrice);
}
console.log('---- ---- ----');

// smallest number check
console.log('1.3');
let num1 = 25;
let num2 = 50;
let num3 = 20;

if (num3 < num1 && num3 < num2) {
  console.log('The third number', num3, 'is the smallest.');
} else {
  console.log('The third number', num3, 'is not the smallest.');
}
console.log('---- ---- ----');

// bookstore shopping cart
console.log('1.4');
let book1 = "Harry Potter and the Sorcerer's Stone";
let book2 = 'The Great Gatsby';
let book3 = 'To Kill a Mockingbird';
let book4 = 'The Lord of the Rings';

let price1 = 400;
let price2 = 300;
let price3 = 250;
let price4 = 500;

let deliveChargeStatus = '';

let totalCartPrice = price1 + price2 + price3 + price4;
// console.log("Total cart price: ₹", totalCartPrice)

if (totalCartPrice < 799) {
  let deliveryCharge = 50;

  totalCartPrice = totalCartPrice + deliveryCharge;
  deliveChargeStatus = 'Optional Delivery Charge: ₹' + deliveryCharge;
} else {
  deliveChargeStatus = 'No Delivery Charge';
}

console.log('*** Bookstore Shopping Cart Summary ***');
console.log('---------------------------------');
console.log('Book 1:', book1, '- ₹', price1);
console.log('Book 2:', book2, '- ₹', price2);
console.log('Book 3:', book3, '- ₹', price3);
console.log('Book 4:', book4, '- ₹', price4);
console.log('---------------------------------');
console.log('Total Cart Price: ₹', totalCartPrice);
console.log('Delivery Charges:', deliveChargeStatus);
