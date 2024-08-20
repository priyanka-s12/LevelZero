console.log('A5.7_CW');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');
let numberArray = [5, 12, 7, 25, 18, 3];

console.log('1.1');
function printOriginalArray() {
  console.log('Original Array:', numberArray);
}

printOriginalArray();
console.log('---- ---- ----');

console.log('1.2');
function addTenToArray() {
  let newArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    newArray.push(numberArray[i] + 10);
  }
  return newArray;
}
console.log('Added 10 to the array:', addTenToArray());
console.log('---- ---- ----');

console.log('1.3');
function convertOddToEven(numbers) {
  let convertedArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      convertedArray.push(numbers[i] + 1);
    } else {
      convertedArray.push(numbers[i]);
    }
  }
  return convertedArray;
}

console.log(
  'Converted odd numbers to even in the array:',
  convertOddToEven(numberArray)
);
console.log('---- ---- ----');

console.log('1.4');
function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

console.log('Largest number in the array:', findLargestNumber(numberArray));
