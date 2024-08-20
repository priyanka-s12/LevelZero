console.log('A5.3_HW_2');
console.log('---- ---- ----');
console.log('1.1');
console.log('---- ---- ----');

function printNumberPattern(n, m) {
  let output = '';
  for (let i = 1; i <= n; i++) {
    output = output + i;
    if (i % m === 0 && i !== n) {
      output = output + '%';
    }
  }
  console.log(output);
}

printNumberPattern(20, 5);

console.log('---- ---- ----');
console.log('1.2');
console.log('---- ---- ----');

function printNumberDivisibleAndNotDivisible(n, m) {
  let divisibleNumbers = '';
  let nontDivisibleNumbers = '';
  for (let i = 10; i <= n; i++) {
    if (i % m === 0) {
      divisibleNumbers = divisibleNumbers + ' ' + i;
    } else {
      nontDivisibleNumbers = nontDivisibleNumbers + ' ' + i;
    }
  }
  console.log('Divisible by ' + m + ': ' + divisibleNumbers);
  console.log('Divisible by ' + m + ': ' + nontDivisibleNumbers);
}

printNumberDivisibleAndNotDivisible(30, 5);

console.log('---- ---- ----');
console.log('1.3');
console.log('---- ---- ----');

function printEvenNumbersBetween(p, n, m) {
  if (p > n < m) {
    for (let i = p; i <= m; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
}

printEvenNumbersBetween(8, 5, 15);
