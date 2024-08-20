let people = [
  {
    name: 'Eva',
    age: 35,
    address: '789 Lane',
    city: 'Paris',
    isTenant: true,
    noOfChildren: 2,
  },
  {
    name: 'Frank',
    age: 29,
    address: '456 Street',
    city: 'London',
    isTenant: true,
    noOfChildren: 2,
  },
  {
    name: 'Grace',
    age: 48,
    address: '123 Avenue',
    city: 'New York',
    isTenant: false,
    noOfChildren: 4,
  },
  {
    name: 'Henry',
    age: 35,
    address: '222 Road',
    city: 'Paris',
    isTenant: true,
    noOfChildren: 1,
  },
  {
    name: 'Isabel',
    age: 42,
    address: '111 Boulevard',
    city: 'New York',
    isTenant: true,
    noOfChildren: 3,
  },
  {
    name: 'Jack',
    age: 33,
    address: '333 Drive',
    city: 'Paris',
    isTenant: false,
    noOfChildren: 0,
  },
  {
    name: 'Joe',
    age: 31,
    address: '302 Drive',
    city: 'Paris',
    isTenant: true,
    noOfChildren: 1,
  },
  {
    name: 'Jiya',
    age: 19,
    address: '302 Avenue road',
    city: 'London',
    isTenant: true,
    noOfChildren: 1,
  },
];

// Given an array of objects. Write JavaScript functions to perform the following tasks:
// 1. Print all object of the person with highest age.
// 2. Print the array of names of people who are tenants and living in Paris. // Output should be like this: ["Eva", "Henry", ..]
// 3. Calculate and print the average age of people living in New York city.

console.log('1.');
function getHigestAgePerson(data) {
  let highestAge = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].age > highestAge.age) {
      highestAge = data[i];
    }
  }
  console.log('Object of person with highest age: \n');
  console.log(highestAge);
  return highestAge;
}

getHigestAgePerson(people);
console.log('---- ---- ----');

console.log('2.');
function getPeople(data, isTenant, city) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].isTenant === isTenant && data[i].city === city) {
      result.push(data[i].name);
    }
  }
  return result;
}
console.log('Array of names of people who are tenants and living in Paris: \n');
console.log(getPeople(people, true, 'Paris'));
console.log('---- ---- ----');

console.log('3.');
function calculateAvgAge(data, city) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].city === city) {
      count = count + 1;
      total = total + data[i].age;
    }
  }
  return total / count;
}

console.log(
  'Avg age of people living in New York: ',
  calculateAvgAge(people, 'New York')
);
