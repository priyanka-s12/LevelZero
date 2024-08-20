console.log('A5_Exercise_2');
console.log('---- ---- ----');

console.log('1.1');
const employeeData = [
  {
    name: 'Rajesh Kumar',
    department: 'Marketing',
    hourlySalary: 250,
    week1Hours: 40,
    week2Hours: 42,
    week3Hours: 38,
    week4Hours: 39,
    bonusMultiplier: 65,
  },
  {
    name: 'Priya Gupta',
    department: 'Sales',
    hourlySalary: 220,
    week1Hours: 38,
    week2Hours: 40,
    week3Hours: 37,
    week4Hours: 41,
    bonusMultiplier: 50,
  },
  {
    name: 'Ankit Sharma',
    department: 'Finance',
    hourlySalary: 280,
    week1Hours: 35,
    week2Hours: 36,
    week3Hours: 39,
    week4Hours: 38,
    bonusMultiplier: 80,
  },
  {
    name: 'Ritu Singh',
    department: 'Operations',
    hourlySalary: 300,
    week1Hours: 42,
    week2Hours: 41,
    week3Hours: 43,
    week4Hours: 40,
    bonusMultiplier: 45,
  },
  {
    name: 'Rahul Verma',
    department: 'IT',
    hourlySalary: 260,
    week1Hours: 37,
    week2Hours: 39,
    week3Hours: 38,
    week4Hours: 36,
    bonusMultiplier: 70,
  },
];

for (let i = 0; i < employeeData.length; i++) {
  employeeData[i].bonusMultiplier = employeeData[i].bonusMultiplier / 100;
}
console.log(employeeData);
console.log('---- ---- ----');

console.log('1.2');
for (let i = 0; i < employeeData.length; i++) {
  let totalHoursWorked = 0;
  let bonusThreshold = 40 * 4;
  let bonusHours = 0;

  totalHoursWorked =
    employeeData[i].week1Hours +
    employeeData[i].week2Hours +
    employeeData[i].week3Hours +
    employeeData[i].week4Hours;
  // employeeData[i].totalHoursWorked = totalHoursWorked

  let totalSalary = totalHoursWorked * employeeData[i].hourlySalary;

  employeeData[i].totalSalaryForFourWeeks = totalSalary;

  if (totalHoursWorked > bonusThreshold) {
    bonusHours = totalHoursWorked - bonusThreshold;
  }

  if (bonusHours) {
    employeeData[i].bonus =
      bonusHours *
      employeeData[i].hourlySalary *
      employeeData[i].bonusMultiplier;
  } else {
    employeeData[i].bonus = 0;
  }
}
console.log(
  'Added totalSalaryForFourWeeks and bonus fields to objects: ',
  employeeData
);
console.log('---- ---- ----');

console.log('1.3');

function printEmployeePayslip(employee) {
  let report = '===== Employee Payslip =====\n';
  for (let i = 0; i < employee.length; i++) {
    report += 'Name: ' + employee[i].name + '\n';
    report += 'Department: ' + employee[i].department + '\n';
    report +=
      'Total Hours Worked: ' +
      (employee[i].week1Hours +
        employee[i].week2Hours +
        employee[i].week3Hours +
        employee[i].week4Hours) +
      '\n';
    report += 'Total Salary: ' + employee[i].totalSalaryForFourWeeks + '\n';
    report += 'Bonus: ' + employee[i].bonus + '\n';
    report += '------\n';
  }
  return report;
}

console.log(printEmployeePayslip(employeeData));
console.log('---- ---- ----');

console.log('1.4');

function getMostPaidEmployee(data) {
  let highestTotalSalary = data[0];
  for (let i = 1; i < data.length; i++) {
    if (
      data[i].totalSalaryForFourWeeks >
      highestTotalSalary.totalSalaryForFourWeeks
    ) {
      highestTotalSalary = data[i];
    }
  }
  return highestTotalSalary;
}

function calculateTotalHours(data) {
  let totalHours = 0;
  for (let i = 0; i < data.length; i++) {
    totalHours =
      totalHours +
      data[i].week1Hours +
      data[i].week2Hours +
      data[i].week3Hours +
      data[i].week4Hours;
  }
  return totalHours;
}

function calculateWeeklyAvg(data, weekNumber) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i][weekNumber];
  }
  return total / data.length;
}

function generateHumanResourceReport(data) {
  let mostPaid = getMostPaidEmployee(data);
  let totalHoursByAll = calculateTotalHours(data);
  let weekOneAverage = calculateWeeklyAvg(data, 'week1Hours');
  let weekTwoAverage = calculateWeeklyAvg(data, 'week2Hours');
  let weekThreeAverage = calculateWeeklyAvg(data, 'week3Hours');
  let weekFourAverage = calculateWeeklyAvg(data, 'week4Hours');

  let report = '====== Human Resource Report ======\n';
  report += '\n------\n';
  report += 'Most Paid Employee\n';
  report += '------\n';
  report += 'Name: ' + mostPaid.name + '\n';
  report += 'Department: ' + mostPaid.department + '\n';
  report +=
    'Total Hours Worked: ' +
    (mostPaid.week1Hours +
      mostPaid.week2Hours +
      mostPaid.week3Hours +
      mostPaid.week4Hours) +
    '\n';
  report += 'Total Salary: ' + mostPaid.totalSalaryForFourWeeks + '\n';
  report += '\n------\n';
  report += 'Company Averages\n';
  report += '------\n';
  report += 'Total Hours Worked by All: ' + totalHoursByAll + '\n';
  report +=
    'Total Average Hours of Company: ' + totalHoursByAll / data.length + '\n';
  report += '------\n';
  report += 'Total Average of Week One: ' + weekOneAverage + '\n';
  report += 'Total Average of Week Two: ' + weekTwoAverage + '\n';
  report += 'Total Average of Week Three: ' + weekThreeAverage + '\n';
  report += 'Total Average of Week Four: ' + weekFourAverage + '\n';

  return report;
}

console.log(generateHumanResourceReport(employeeData));
