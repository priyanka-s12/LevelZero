console.log('A4.2_CW');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');

console.log('1.1');
function checkTemperature(temperature) {
  if (temperature > 30) {
    console.log("It's a hot day!");
  }
}

checkTemperature(35);
console.log('---- ---- ----');

console.log('1.2');
function checkDiscountEligibility(totalAount, discountThreshold) {
  if (totalAount >= discountThreshold) {
    console.log('The customer is eligible for a discount.');
  } else {
    console.log('The customer is not eligible for a discount.');
  }
}

checkDiscountEligibility(500, 1000);
console.log('---- ---- ----');

console.log('1.3');
function findLargestNumber(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log('The largest number is: ' + findLargestNumber(25, 18, 32));
console.log('---- ---- ----');

console.log('1.4');
function calculateBonus(workedHours, grade, totalSalary) {
  if (workedHours > 25 && grade > 85) {
    return (totalSalary = totalSalary + totalSalary * 0.1);
  } else if (workedHours > 15 && grade > 75) {
    return (totalSalary = totalSalary + totalSalary * 0.05);
  } else {
    return totalSalary;
  }
}

let hoursWorked = 30;
let studentGrade = 90;
let salary = 5000;

console.log(
  'The updated salary is: ' + calculateBonus(hoursWorked, studentGrade, salary)
);

// console.log("The updated salary is: "+ calculateBonus(30, 90, 5000))
