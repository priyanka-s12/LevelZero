//for loop
console.log('A5.1_CW');
console.log('---- ---- ----');

console.log('1.1');
console.log('---- ---- ----');

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log('---- ---- ----');

//repeating numbers on each row-> string concatenation
console.log('1.2');
console.log('---- ---- ----');

let pattern = '';
for (let i = 1; i <= 4; i++) {
  pattern = pattern + '1';
  console.log(pattern);
}
console.log('---- ---- ----');

//repeating characters
console.log('1.3');
console.log('---- ---- ----');

let alphabetPattern = '';
for (let i = 1; i <= 5; i++) {
  alphabetPattern = alphabetPattern + 'a';
  console.log(alphabetPattern);
}
console.log('---- ---- ----');

//dynamic numbers on each row
console.log('1.4');
console.log('---- ---- ----');

let numberPattern = '';
for (let i = 1; i <= 5; i++) {
  numberPattern = numberPattern + i;
  console.log(numberPattern);
}
console.log('---- ---- ----');

//table of 2
console.log('1.5');
console.log('---- ---- ----');

for (let i = 1; i <= 10; i++) {
  let result = 2 * i;
  console.log('2 * ' + i + ' = ' + result);
}
console.log('---- ---- ----');

//squares of numbers
console.log('1.6');
console.log('---- ---- ----');

for (let i = 1; i <= 10; i++) {
  let square = i * i;
  console.log(i + ' * ' + i + ' = ' + square);
}
