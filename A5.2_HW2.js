console.log('A5.2_HW_2');
console.log('---- ---- ----');
console.log('Exercise 1');

console.log('---- ---- ----');
console.log('1.1');
console.log('---- ---- ----');

for (let i = 30; i >= 11; i--) {
  console.log(i);
}

console.log('---- ---- ----');
console.log('1.2');
console.log('---- ---- ----');

for (let i = 15; i >= 1; i--) {
  let result = 9 * i;
  console.log(9 + ' * ' + i + ' = ' + result);
}

console.log('---- ---- ----');
console.log('1.3');
console.log('---- ---- ----');

for (let i = 50; i >= 5; i -= 5) {
  console.log(i);
}

console.log('---- ---- ----');
console.log('Exercise 2');
console.log('---- ---- ----');
console.log('2.1');
console.log('---- ---- ----');

function printAllNumbersDivisibleBy8(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 8 === 0) {
      console.log(i);
    }
  }
}

printAllNumbersDivisibleBy8(30);

console.log('---- ---- ----');
console.log('2.2');
console.log('---- ---- ----');

function printAllOddNumbers(n) {
  for (let i = 5; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printAllOddNumbers(15);

console.log('---- ---- ----');
console.log('2.3');
console.log('---- ---- ----');

function printAllNumbersDivisibleBy5And7(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
      console.log(i);
    }
  }
}

printAllNumbersDivisibleBy5And7(50);
