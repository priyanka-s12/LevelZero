console.log('A4.1_HW_1');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');

console.log('1.1');
function greetUser() {
  console.log('Good Morning!');
}

greetUser();
console.log('---- ---- ----');

console.log('1.2');
function welcomeMessage(userName) {
  console.log('Hey there, ' + userName + '! We are thrilled to have you.');
}

welcomeMessage('John');
console.log('---- ---- ----');

console.log('1.3');
function formatMessage(message) {
  return '* ' + message + ' *';
}

console.log(formatMessage('Learning functions with return in JavaScript.'));
console.log('---- ---- ----');

console.log('1.4');
function concatenateStrings(string1, string2) {
  return string1 + ' ' + string2;
}

console.log(concatenateStrings('Red', 'Bull'));
console.log('---- ---- ----');

console.log('1.5');
function addStrings(color1, color2, color3) {
  return 'The primary colors are: ' + color1 + ', ' + color2 + ', ' + color3;
}

console.log(addStrings('Red', 'Yellow', 'Blue'));
console.log('---- ---- ----');

console.log('Exercise 2');
console.log('---- ---- ----');

console.log('2.1');
function incrementByAgeBy5(age) {
  return age + 5;
}

console.log(incrementByAgeBy5(25));
console.log('---- ---- ----');

console.log('2.2');
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(10, 30));
console.log('---- ---- ----');

console.log('2.3');
function calculateDiscountAmount(price, discountPercentage) {
  return (price * discountPercentage) / 100;
}

console.log(calculateDiscountAmount(1000, 20));
console.log('---- ---- ----');

console.log('2.4');
function calculateNetSalary(baseSalary, performanceBonus) {
  return baseSalary + performanceBonus;
}

console.log(calculateNetSalary(290000, 20000));
