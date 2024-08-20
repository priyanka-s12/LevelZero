console.log('A5.6_HW_2');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');

const srkEarnings = [
  12500020, 15000465, 950000302, 201800006, 18000000, 11000000, 900054608,
  130050087, 140000000, 160000109,
];

console.log('1.1');
console.log('Earnings divisible by 3:');
for (let i = 0; i < srkEarnings.length; i++) {
  if (srkEarnings[i] % 3 === 0) {
    console.log(srkEarnings[i]);
  }
}
console.log('---- ---- ----');

console.log('1.2');
console.log('Earnings divisible by 5:');
for (let i = 0; i < srkEarnings.length; i++) {
  if (srkEarnings[i] % 5 === 0) {
    console.log(srkEarnings[i]);
  }
}
console.log('---- ---- ----');

console.log('1.3');
let newArray = [];
for (let i = 0; i < srkEarnings.length; i++) {
  if (srkEarnings[i] % 2 === 0) {
    newArray.push(srkEarnings[i]);
  }
}
console.log('Earnings divisible by 2 [New array] :', newArray);
console.log('---- ---- ----');

console.log('1.4');
let totalEarnings = 0;
for (let i = 0; i < srkEarnings.length; i++) {
  totalEarnings = totalEarnings + srkEarnings[i];
}

console.log('Total earnings of SRK:', totalEarnings);
console.log('---- ---- ----');

console.log('1.5');
let sumOfEvenEarnings = 0;
let sumOfOddEarnings = 0;
for (let i = 0; i < srkEarnings.length; i++) {
  if (srkEarnings[i] % 2 === 0) {
    sumOfEvenEarnings = sumOfEvenEarnings + srkEarnings[i];
  } else {
    sumOfOddEarnings = sumOfOddEarnings + srkEarnings[i];
  }
}

console.log('Sum of even earnings:', sumOfEvenEarnings);
console.log('Sum of odd earnings:', sumOfOddEarnings);
