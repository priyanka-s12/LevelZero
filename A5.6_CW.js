console.log('A5.6_CW');
console.log('---- ---- ----');
console.log('Exercise 1');
console.log('---- ---- ----');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('1.1');
console.log('Numbers divisible by 3:');
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i]);
  }
}
console.log('---- ---- ----');

console.log('1.2');
console.log('Numbers divisible by 5:');
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
  }
}
console.log('---- ---- ----');

console.log('1.3');
let newArray = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    newArray.push(numbers[i]);
  }
}

console.log('Numbers divisible by 2 [New Array]:', newArray);
console.log('---- ---- ----');

console.log('1.4');
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log('Sum of all numbers:', sum);
console.log('---- ---- ----');

console.log('1.5');
let sumOfEvenNumbers = 0;
let sumOfOddNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sumOfEvenNumbers = sumOfEvenNumbers + numbers[i];
  }
  if (numbers[i] % 2 !== 0) {
    sumOfOddNumbers = sumOfOddNumbers + numbers[i];
  }
}

console.log('Sum of even numbers:', sumOfEvenNumbers);
console.log('Sum of odd numbers:', sumOfOddNumbers);
