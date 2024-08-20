console.log('A5.7_HW_1');
console.log('---- ---- ----');

const numbersArray = [22, 35, 18, 47, 50, 63];

console.log('1.1');
function printOriginalArray() {
  console.log('Original Array:', numbersArray);
}

printOriginalArray();
console.log('---- ---- ----');

console.log('1.2');
function multiplyNumbersByTwo(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] * 2);
    // console.log(newArray)
  }
  return newArray;
}

console.log(
  'Array with numbers multiplied by 2:',
  multiplyNumbersByTwo(numbersArray)
);
console.log('---- ---- ----');

console.log('1.3');
function convertEvenToOdd(numbers) {
  let convertedArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      convertedArray.push(numbers[i] + 1);
    } else {
      convertedArray.push(numbers[i]);
    }
  }
  return convertedArray;
}

console.log(
  'Array with even numbers coverted to the nearest odd:',
  convertEvenToOdd(numbersArray)
);
console.log('---- ---- ----');

console.log('1.4');
function findSmallestNumber(numbers) {
  let smallestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
    }
  }
  return smallestNumber;
}

console.log(
  'The smallest number in the array:',
  findSmallestNumber(numbersArray)
);
