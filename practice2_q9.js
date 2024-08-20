console.log('Question 9');
const projectDetails = [
  {
    projectName: 'Project X',
    department: 'Engineering',
    tasksCompleted: 150,
    tasksInProgress: 30,
    duration: 10,
  },
  {
    projectName: 'Project Y',
    department: 'Product Management',
    tasksCompleted: 180,
    tasksInProgress: 20,
    duration: 8,
  },
  {
    projectName: 'Project Z',
    department: 'Engineering',
    tasksCompleted: 120,
    tasksInProgress: 25,
    duration: 12,
  },
  {
    projectName: 'Project W',
    department: 'Sales',
    tasksCompleted: 90,
    tasksInProgress: 15,
    duration: 15,
  },
  {
    projectName: 'Project V',
    department: 'Product Management',
    tasksCompleted: 200,
    tasksInProgress: 10,
    duration: 9,
  },
];

function getTotalTasksInProgress(data, department) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].department === department) {
      total = total + data[i].tasksInProgress;
    }
  }
  return total;
}

function getTasksCompleted(data, department1, department2) {
  total = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].department === department1 ||
      data[i].department === department2
    ) {
      total = total + data[i].tasksCompleted;
    }
  }
  return total;
}

function calculateAverageDuration(data, department) {
  let total = 0;
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].department === department) {
      total = total + data[i].duration;
      result.push(data[i]);
    }
  }
  return total / result.length;
}

function generateReport(data) {
  let tasksInProgress = getTotalTasksInProgress(data, 'Engineering');
  let tasksCompleted = getTasksCompleted(
    data,
    'Engineering',
    'Product Management'
  );
  let avgDUration = calculateAverageDuration(data, 'Product Management');

  let report = '---- Project Details ----';
  report +=
    '\nTotal tasks in progress by teams of Engineering department are: ' +
    tasksInProgress;

  report +=
    '\n\nTotal tasks completed by Engineering and Product management teams are: ' +
    tasksCompleted;

  report +=
    '\n\nAverage duration of projects in Product management department is: ' +
    avgDUration;

  return report;
}

console.log(generateReport(projectDetails));
