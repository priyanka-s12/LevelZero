console.log('Question 4');
const appsData = [
  {
    appName: 'App 1',
    rating: 4.2,
    minUserAge: 12,
    downloads: 4000,
    category: 'games',
  },
  {
    appName: 'App 2',
    rating: 4.5,
    minUserAge: 18,
    downloads: 9000,
    category: 'education',
  },
  {
    appName: 'App 3',
    rating: 4.7,
    minUserAge: 10,
    downloads: 11000,
    category: 'medicine',
  },
  {
    appName: 'App 4',
    rating: 3.1,
    minUserAge: 18,
    downloads: 4000,
    category: 'medicine',
  },
  {
    appName: 'App 5',
    rating: 4.3,
    minUserAge: 18,
    downloads: 7000,
    category: 'fitness',
  },
];

function getHighestRatedApp(data) {
  let highestRatedApp = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].rating > highestRatedApp.rating) {
      highestRatedApp = data[i];
    }
  }
  return highestRatedApp;
}

function getAvgAge(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].minUserAge;
  }
  return total / data.length;
}

function getHighestDownloads(data) {
  let highestDownloads = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].downloads > highestDownloads.downloads) {
      highestDownloads = data[i];
    }
  }
  return highestDownloads;
}

function generateReport(appsData) {
  let highestRating = getHighestRatedApp(appsData);
  let averageAge = getAvgAge(appsData);
  let highestAppDownloads = getHighestDownloads(appsData);

  let report = '-----Report-----\n';
  report += 'Highest Rated App';
  report += '\nName: ' + highestRating.appName;
  report += '\nDownloads: ' + highestRating.downloads;
  report += '\nCategory: ' + highestRating.category;
  report += '\nRating: ' + highestRating.rating;
  report += '\n\nAverage user age: ' + averageAge;
  report += '\n\nApp which has more than 10000 downloads';
  report += '\nName: ' + highestAppDownloads.appName;
  report += '\nRating: ' + highestAppDownloads.rating;
  report += '\nMinimum User Age: ' + highestAppDownloads.minUserAge;
  report += '\nDownloads: ' + highestAppDownloads.downloads;
  report += '\nCategory: ' + highestAppDownloads.category;
  return report;
}

console.log(generateReport(appsData));
console.log('---- ---- ----');

console.log('Question 5');
const projectDetails = [
  { projectName: 'Project A', teamSize: 8, budget: 120000 },
  { projectName: 'Project B', teamSize: 12, budget: 180000 },
  { projectName: 'Project C', teamSize: 6, budget: 90000 },
  { projectName: 'Project D', teamSize: 10, budget: 150000 },
  { projectName: 'Project E', teamSize: 15, budget: 200000 },
];

function calculateAverageTeamSize(projectsData) {
  let totalTeamSize = 0;
  for (let i = 0; i < projectsData.length; i++) {
    totalTeamSize = totalTeamSize + projectsData[i].teamSize;
  }
  return totalTeamSize / projectsData.length;
}
console.log('Average Team Size: ', calculateAverageTeamSize(projectDetails));

function calculateTotalBudget(projectsData) {
  let totalBudget = 0;
  for (let i = 0; i < projectsData.length; i++) {
    totalBudget = totalBudget + projectsData[i].budget;
  }
  return totalBudget;
}

console.log(
  'Total budget of the quarter: ' + calculateTotalBudget(projectDetails)
);
console.log('---- ---- ----');

console.log('Question 6');
const employeeData = [
  { employeeName: 'John Doe', age: 35, department: 'HR', experience: 7 },
  {
    employeeName: 'Jane Smith',
    age: 42,
    department: 'Finance',
    experience: 12,
  },
  { employeeName: 'Michael Johnson', age: 30, department: 'IT', experience: 5 },
  {
    employeeName: 'Emily Williams',
    age: 45,
    department: 'Sales',
    experience: 15,
  },
  {
    employeeName: 'David Brown',
    age: 38,
    department: 'Marketing',
    experience: 9,
  },
];

function getAverageAge(data) {
  let totalAge = 0;
  for (let i = 0; i < data.length; i++) {
    totalAge = totalAge + data[i].age;
  }
  return totalAge / data.length;
}

function getMaximumExpEmployee(data) {
  let maxExpEmployee = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].experience > maxExpEmployee.experience) {
      maxExpEmployee = data[i];
    }
  }
  return maxExpEmployee;
}

function generateEmployeesreport(data) {
  let avgAge = getAverageAge(data);
  let maximumExpEmp = getMaximumExpEmployee(data);

  let report = '-----Employee Report-----\n';
  report += 'Average age of the employees: ' + avgAge;
  report += '\n\n----Employee with maximum experience----';
  report += '\nName: ' + maximumExpEmp.employeeName;
  report += '\nAge: ' + maximumExpEmp.age;
  report += '\nDepartment: ' + maximumExpEmp.department;
  report += '\nExperience: ' + maximumExpEmp.experience;

  return report;
}

console.log(generateEmployeesreport(employeeData));
