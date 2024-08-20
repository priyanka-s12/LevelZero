console.log('A5.3_HW_1');
console.log('---- ---- ----');
console.log('1.1');
console.log('---- ---- ----');

function printNumberPattern(n, m) {
  let output = '';
  for (let i = 1; i <= n; i++) {
    output = output + i;
    if (i % m === 0) {
      output = output + '-';
    }
  }
  console.log(output);
}

printNumberPattern(9, 4);

console.log('---- ---- ----');
console.log('1.2');
console.log('---- ---- ----');

function printNumberDivisibleAndNotDivisible(n, m) {
  let divisibleNumbers = '';
  let notDivisibleNumbers = '';
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisibleNumbers = divisibleNumbers + ' ' + i;
    } else {
      notDivisibleNumbers = notDivisibleNumbers + ' ' + i;
    }
  }
  console.log('Divisible by ' + m + ':' + divisibleNumbers);
  console.log('Not divisible by ' + m + ':' + notDivisibleNumbers);
}

printNumberDivisibleAndNotDivisible(20, 6);

console.log('---- ---- ----');
console.log('1.3');
console.log('---- ---- ----');

function printDivisibleNumbersBetween(p, n, m) {
  if (p < n < m) {
    for (let i = n; i <= m; i++) {
      if (i % p === 0) {
        console.log(i);
      }
    }
  }
}

printDivisibleNumbersBetween(3, 5, 15);
