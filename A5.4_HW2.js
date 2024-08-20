console.log('A5.4_HW_2');
console.log('---- ---- ----');

console.log('1.1');
function averageOfNumbersUpToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum / n;
}
console.log('The average of numbers from 1 to 10:', averageOfNumbersUpToN(10));
console.log('---- ---- ----');

console.log('1.2');
function sumOfNumberGreaterThanSixUpToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i > 6) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log('The sum of numbers is:', sumOfNumberGreaterThanSixUpToN(12));
console.log('---- ---- ----');

console.log('1.3');
function sumDivisibleByEightUpToN(n) {
  let sum = 0;
  for (let i = 10; i <= n; i++) {
    if (i % 8 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumDivisibleByEightUpToN(40));
console.log('---- ---- ----');

console.log('1.4');
function sumEvenAndOddUpToN(n) {
  let sumOfAllEvenNumbers = 0;
  let sumOfAllOddNumbers = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sumOfAllEvenNumbers = sumOfAllEvenNumbers + i;
    } else {
      sumOfAllOddNumbers = sumOfAllOddNumbers + i;
    }
  }
  console.log('Sum of Even Numbers:', sumOfAllEvenNumbers);
  console.log('Sum of Odd Numbers:', sumOfAllOddNumbers);
}
sumEvenAndOddUpToN(30);
