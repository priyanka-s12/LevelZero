console.log('A5.7_HW_2');
console.log('---- ---- ----');

const numbersArray = [33, 57, 24, 49, 52, 66];

console.log('1.1');
function printoriginalArray() {
  console.log('Original array:', numbersArray);
}
printoriginalArray();
console.log('---- ---- ----');

console.log('1.2');
function divideNumbersByThree(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] / 3);
  }
  return newArray;
}

console.log(
  'Array with numbers divided by 3:',
  divideNumbersByThree(numbersArray)
);
console.log('---- ---- ----');

console.log('1.3');
function findNumInArray(numbers, searchNum) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchNum) {
      console.log(searchNum + ' is present in the given array');
      return true;
    }
  }
  console.log(searchNum + ' is NOT present in the given array');
  return false;
}

console.log(findNumInArray(numbersArray, 24));
console.log('---- ---- ----');

console.log('1.4');
function findLargestNumberDivisibleBy5(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
      return numbers[i];
    }
  }
  return 0;
}
console.log(
  'The largest number divisible by 5:',
  findLargestNumberDivisibleBy5(numbersArray)
);
