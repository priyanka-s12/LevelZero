console.log('Question 9');
const customerData = [
  {
    customerName: 'Eva',
    age: 31,
    address: '789 Lane',
    city: 'X',
    totalPurchases: 7,
  },
  {
    customerName: 'Frank',
    age: 29,
    address: '456 Street',
    city: 'Z',
    totalPurchases: 8,
  },
  {
    customerName: 'Grace',
    age: 38,
    address: '123 Avenue',
    city: 'Y',
    totalPurchases: 12,
  },
  {
    customerName: 'Henry',
    age: 35,
    address: '222 Road',
    city: 'X',
    totalPurchases: 6,
  },
  {
    customerName: 'Isabel',
    age: 42,
    address: '111 Boulevard',
    city: 'Y',
    totalPurchases: 10,
  },
  {
    customerName: 'Jack',
    age: 33,
    address: '333 Drive',
    city: 'Z',
    totalPurchases: 10,
  },
];

console.log('a.');
function getZ(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].city === 'Z') {
      total = total + data[i].totalPurchases;
    }
  }
  return total;
}

console.log('Total purchases from city Z: ', getZ(customerData));
console.log('---- ---- ----');

console.log('b.');
function calculateAverageAge(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].age;
  }
  return total / data.length;
}
console.log('Average age: ', calculateAverageAge(customerData));
console.log('---- ---- ----');

console.log('c.');
function getTotalPurchases(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    // if(data[i].city === "X"){
    //   total = total + data[i].totalPurchases
    // }
    // if(data[i].city === "Y")
    //   total = total + data[i].totalPurchases
    if (data[i].city === 'X' || data[i].city === 'Y') {
      total = total + data[i].totalPurchases;
    }
  }
  return total;
}

console.log(
  'Total purchases from city X and Y: ',
  getTotalPurchases(customerData)
);
console.log('---- ---- ----');

console.log('d.');
function getAvgAgeXY(data) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].city === 'X' || data[i].city === 'Y') {
      count = count + 1;
      total = total + data[i].age;
    }
  }
  return total / count;
}
console.log(
  'Average age of customers residing in city X and Y: ',
  getAvgAgeXY(customerData)
);
console.log('---- ---- ----');

console.log('Question 10');
const employeeData = [
  {
    employeeName: 'Alex',
    age: 28,
    department: 'Development',
    projectsCompleted: 5,
    projectsInProgress: 3,
  },
  {
    employeeName: 'Beth',
    age: 35,
    department: 'Marketing',
    projectsCompleted: 8,
    projectsInProgress: 5,
  },
  {
    employeeName: 'Charlie',
    age: 40,
    department: 'Sales',
    projectsCompleted: 12,
    projectsInProgress: 4,
  },
  {
    employeeName: 'David',
    age: 32,
    department: 'Development',
    projectsCompleted: 6,
    projectsInProgress: 13,
  },
  {
    employeeName: 'Emily',
    age: 45,
    department: 'Sales',
    projectsCompleted: 10,
    projectsInProgress: 3,
  },
  {
    employeeName: 'Frank',
    age: 37,
    department: 'Marketing',
    projectsCompleted: 10,
    projectsInProgress: 5,
  },
];

function getProjectsInProgress(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].department === 'Marketing') {
      total = total + data[i].projectsInProgress;
    }
  }
  return total;
}
console.log(
  'Projects in progress by Marketing department are: ',
  getProjectsInProgress(employeeData)
);
console.log('---- ---- ----');

console.log('b.');
function getProjectsCompleted(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].department === 'Marketing' || data[i].department === 'Sales') {
      total = total + data[i].projectsCompleted;
    }
  }
  return total;
}
console.log(
  'Projects completed by marketing and Sales departments are: ',
  getProjectsCompleted(employeeData)
);
console.log('---- ---- ----');

console.log('c.');
function getAvgSales(data) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].department === 'Sales') {
      count = count + 1;
      total = total + data[i].age;
    }
  }
  return total / count;
}
console.log(
  'Average age of employees in the Sales department: ',
  getAvgSales(employeeData)
);
