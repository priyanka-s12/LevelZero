console.log('A5.9_CW');
console.log('---- ---- ----');

console.log('Exerceise 1');
console.log('---- ---- ----');

const citizen = {
  name: 'Sandeep',
  age: 65,
};

console.log('1.1');
if (citizen.age >= 60) {
  console.log(citizen.name + ' is a senior citizen.');
} else {
  console.log(citizen.name + ' is not a senior citizen.');
}
console.log('---- ---- ----');

console.log('1.2');
citizen.bp = 'Normal';
console.log('---- ---- ----');

console.log('1.3');
if (citizen.age >= 60 && citizen.bp === 'Normal') {
  console.log(citizen.name + ' is fit to travel.');
} else {
  console.log(citizen.name + ' is not fit to travel.');
}
console.log('---- ---- ----');

console.log('Exerceise 2');
console.log('---- ---- ----');

function incrementAge(person) {
  console.log('2.1');
  console.log('Person object:', person);
  console.log('---- ---- ----');

  console.log('2.2');
  const newPerson = { ...person };
  console.log('Is newPerson same as person?', newPerson === person);
  console.log('---- ---- ----');

  console.log('2.3');
  if (newPerson.isBirthday) {
    newPerson.age = newPerson.age + 1;
  }
  console.log('New person object:', newPerson);
}

const person = {
  name: 'Rajesh',
  age: 36,
  isBirthday: true,
};

incrementAge(person);
console.log('---- ---- ----');

console.log('Exerceise 3');
console.log('---- ---- ----');

function employeeRecords(employee1, employee2) {
  if (employee1.hoursWorked > employee2.hoursWorked) {
    return true;
  } else {
    return false;
  }
}

const employee1 = {
  name: 'Amit',
  hoursWorked: 160,
};

const employee2 = {
  name: 'Suresh',
  hoursWorked: 180,
};

console.log(
  'Has Amit worked more hours than Suresh? ',
  employeeRecords(employee1, employee2)
);
