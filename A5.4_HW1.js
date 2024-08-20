console.log('A5.4_HW_1');
console.log('---- ---- ----');

console.log('1.1');
function sumUpToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumUpToN(10));
console.log('---- ---- ----');

console.log('1.2');
function sumOfEvenNumbersUpToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log('Sum of even numbers:', sumOfEvenNumbersUpToN(9));
console.log('---- ---- ----');

console.log('1.3');
function sumDivisibleByFiveAndSevenUpToN(n) {
  let sumOfNumbersDivisibleByFive = 0;
  let sumOfNumbersDivisibleBySeven = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      sumOfNumbersDivisibleByFive = sumOfNumbersDivisibleByFive + i;
    }
    if (i % 7 === 0) {
      sumOfNumbersDivisibleBySeven = sumOfNumbersDivisibleBySeven + i;
    }
  }
  console.log('Sum of numbers divisible by 5:', sumOfNumbersDivisibleByFive);
  console.log('Sum of numbers divisible by 7:', sumOfNumbersDivisibleBySeven);
}
sumDivisibleByFiveAndSevenUpToN(35);
console.log('---- ---- ----');

console.log('1.4');
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log('Factorial of 7:', factorial(7));
