// if else
console.log('A3.1_CW');
console.log('---- ---- ----');

console.log('1.1');
let age = 25;
let isBirthday = true;
if (isBirthday) {
  age = age + 1;
}
console.log('Current Age:', age);
console.log('---- ---- ----');

console.log('1.2');
let passengerAge = 55;
let ticketPrice = 100;

if (passengerAge > 60) {
  ticketPrice = ticketPrice - ticketPrice * 0.15;
  console.log('Ticket price for age greater than 60: ₹', ticketPrice);
} else {
  console.log('Ticket price for age less than or equal to 60: ₹', ticketPrice);
}
console.log('---- ---- ----');

console.log('1.3');
let num1 = 10;
let num2 = 20;
let num3 = 15;

if (num3 > num1 && num3 > num2) {
  console.log('The third number', num3, 'is the largest');
} else {
  console.log('The third number', num3, 'is not the largest');
}
console.log('---- ---- ----');

console.log('1.4');
let item1 = 'Saree';
let item2 = 'Kurta';
let item3 = 'Jeans';
let item4 = 'Shoes';

let price1 = 500;
let price2 = 300;
let price3 = 900;
let price4 = 400;

let totalCartPrice = price1 + price2 + price3 + price4;

let deliveryChargeStatus = '';

if (totalCartPrice < 1999) {
  let deliveryCharge = 99;
  totalCartPrice = totalCartPrice + deliveryCharge;
  deliveryChargeStatus = 'Optional Delivery Charge: ₹' + deliveryCharge;
} else {
  deliveryChargeStatus = 'No Delivery Charge';
}
console.log('Shopping Cart');
console.log('----------------------------');
console.log('Item:', item1, 'Price: ₹', price1);
console.log('Item:', item2, 'Price: ₹', price2);
console.log('Item:', item3, 'Price: ₹', price3);
console.log('Item:', item4, 'Price: ₹', price4);

console.log('----------------------------');
console.log('Delivery Charges:', deliveryChargeStatus);
console.log('----------------------------');
console.log('Total Cart Price: ₹', totalCartPrice);
