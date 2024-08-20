console.log('A3.3_HW_1');
console.log('---- ---- ----');

//calculating payslip for employees based on various factors

//employee1
let employee1Name = 'Rahul';
let employee1Grade = 90;
let employee1HoursWorked = 27;
let employee1Salary = 45000;
let employee1VacationLeaveTaken = 2;
let employee1SickLeaveTaken = 1;

let employee1Bonus = '';
if (employee1HoursWorked > 30 && employee1Grade > 75) {
  employee1Bonus = 0.2;
} else if (employee1HoursWorked > 25 && employee1Grade > 95) {
  employee1Bonus = 0.15;
} else if (employee1HoursWorked > 25 && employee1Grade > 85) {
  employee1Bonus = 0.1;
}

let employee1PFDeduction = '';
if (employee1Salary > 35000) {
  employee1PFDeduction = employee1Salary * 0.125;
} else {
  employee1PFDeduction = 2500;
}

let employee1TDSDeduction = '';
if (employee1Salary > 40000) {
  employee1TDSDeduction = employee1Salary * 0.1;
} else {
  employee1TDSDeduction = 199;
}

let employee1VacationDeduction =
  employee1VacationLeaveTaken * (employee1Salary / 30);

let employee1SickDeduction = employee1SickLeaveTaken * (employee1Salary / 30);

let employee1NetSalary =
  employee1Salary +
  employee1Salary * employee1Bonus -
  employee1PFDeduction -
  employee1TDSDeduction -
  employee1VacationDeduction -
  employee1SickDeduction;

let employee1Payslip =
  'Payslip for Employee 1:' +
  '\n' +
  'Employee Name: ' +
  employee1Name +
  '\n' +
  'Grade: ' +
  employee1Grade +
  '\n' +
  'Hours Worked: ' +
  employee1HoursWorked +
  '\n' +
  'Salary: ' +
  employee1Salary +
  '\n' +
  'Bonus: ' +
  employee1Bonus +
  '\n' +
  'PF Deduction: ' +
  employee1PFDeduction +
  '\n' +
  'TDS Deduction: ' +
  employee1TDSDeduction +
  '\n' +
  'Vacation Deduction: ' +
  employee1VacationDeduction +
  '\n' +
  'Sick Deduction: ' +
  employee1SickDeduction +
  '\n' +
  'Net Salary: ' +
  employee1NetSalary +
  '\n';

console.log(employee1Payslip);

//employee2
let employee2Name = 'Sairaj';
let employee2Grade = 80;
let employee2HoursWorked = 32;
let employee2Salary = 35000;
let employee2VacationLeaveTaken = 1;
let employee2SickLeaveTaken = 1;

let employee2Bonus = '';
if (employee2HoursWorked > 30 && employee2Grade > 75) {
  employee2Bonus = 0.2;
} else if (employee2HoursWorked > 25 && employee2Grade > 95) {
  employee2Bonus = 0.15;
} else if (employee2HoursWorked > 25 && employee2Grade > 85) {
  employee2Bonus = 0.1;
}

let employee2PFDeduction = '';
if (employee2Salary > 35000) {
  employee2PFDeduction = employee2Salary * 0.125;
} else {
  employee2PFDeduction = 2500;
}

let employee2TDSDeduction = '';
if (employee2Salary > 40000) {
  employee2TDSDeduction = employee2Salary * 0.1;
} else {
  employee2TDSDeduction = 199;
}

let employee2VacationDeduction =
  employee2VacationLeaveTaken * (employee2Salary / 30);

let employee2SickDeduction = employee2SickLeaveTaken * (employee2Salary / 30);

let employee2NetSalary =
  employee2Salary +
  employee2Salary * employee2Bonus -
  employee2PFDeduction -
  employee2TDSDeduction -
  employee2VacationDeduction -
  employee2SickDeduction;

let employee2Payslip =
  'Payslip for Employee 2:' +
  '\n' +
  'Employee Name: ' +
  employee2Name +
  '\n' +
  'Grade: ' +
  employee2Grade +
  '\n' +
  'Hours Worked: ' +
  employee2HoursWorked +
  '\n' +
  'Salary: ' +
  employee2Salary +
  '\n' +
  'Bonus: ' +
  employee2Bonus +
  '\n' +
  'PF Deduction: ' +
  employee2PFDeduction +
  '\n' +
  'TDS Deduction: ' +
  employee2TDSDeduction +
  '\n' +
  'Vacation Deduction: ' +
  employee2VacationDeduction +
  '\n' +
  'Sick Deduction: ' +
  employee2SickDeduction +
  '\n' +
  'Net Salary: ' +
  employee2NetSalary +
  '\n';

console.log(employee2Payslip);

//employee3
let employee3Name = 'Seema';
let employee3Grade = 95;
let employee3HoursWorked = 29;
let employee3Salary = 55000;
let employee3VacationLeaveTaken = 1;
let employee3SickLeaveTaken = 2;

let employee3Bonus = '';
if (employee3HoursWorked > 30 && employee3Grade > 75) {
  employee3Bonus = 0.2;
} else if (employee3HoursWorked > 25 && employee3Grade > 95) {
  employee3Bonus = 0.15;
} else if (employee3HoursWorked > 25 && employee3Grade > 85) {
  employee3Bonus = 0.1;
}

let employee3PFDeduction = '';
if (employee3Salary > 35000) {
  employee3PFDeduction = employee3Salary * 0.125;
} else {
  employee3PFDeduction = 2500;
}

let employee3TDSDeduction = '';
if (employee3Salary > 40000) {
  employee3TDSDeduction = employee3Salary * 0.1;
} else {
  employee3TDSDeduction = 199;
}

let employee3VacationDeduction =
  employee3VacationLeaveTaken * (employee3Salary / 30);

let employee3SickDeduction = employee3SickLeaveTaken * (employee3Salary / 30);

let employee3NetSalary =
  employee3Salary +
  employee3Salary * employee3Bonus -
  employee3PFDeduction -
  employee3TDSDeduction -
  employee3VacationDeduction -
  employee3SickDeduction;

let employee3Payslip =
  'Payslip for Employee 3:' +
  '\n' +
  'Employee Name: ' +
  employee3Name +
  '\n' +
  'Grade: ' +
  employee3Grade +
  '\n' +
  'Hours Worked: ' +
  employee3HoursWorked +
  '\n' +
  'Salary: ' +
  employee3Salary +
  '\n' +
  'Bonus: ' +
  employee3Bonus +
  '\n' +
  'PF Deduction: ' +
  employee3PFDeduction +
  '\n' +
  'TDS Deduction: ' +
  employee3TDSDeduction +
  '\n' +
  'Vacation Deduction: ' +
  employee3VacationDeduction +
  '\n' +
  'Sick Deduction: ' +
  employee3SickDeduction +
  '\n' +
  'Net Salary: ' +
  employee3NetSalary +
  '\n';

console.log(employee3Payslip);
