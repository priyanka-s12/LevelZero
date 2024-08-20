console.log('Practice Set 1');
console.log('---- ---- ----');
console.log('Question 1');
console.log('---- ---- ----');

const studentsMarks = [
  {
    name: 'Preethi',
    rollNo: 301,
    chemistry: 78,
    maths: 88,
    commerce: 90,
    physicalEducation: 90,
  },
  {
    name: 'Priya',
    rollNo: 302,
    chemistry: 75,
    maths: 90,
    commerce: 85,
    physicalEducation: 94,
  },
  {
    name: 'Jaya',
    rollNo: 303,
    chemistry: 82,
    maths: 95,
    commerce: 88,
    physicalEducation: 92,
  },
  {
    name: 'Prema',
    rollNo: 304,
    chemistry: 85,
    maths: 96,
    commerce: 91,
    physicalEducation: 99,
  },
  {
    name: 'Shreetama',
    rollNo: 305,
    chemistry: 83,
    maths: 92,
    commerce: 89,
    physicalEducation: 91,
  },
];

function calculateTotal(studentsMarks) {
  let totalMarks = 0;
  for (let i = 0; i < studentsMarks.length; i++) {
    totalMarks =
      studentsMarks[i].chemistry +
      studentsMarks[i].maths +
      studentsMarks[i].commerce +
      studentsMarks[i].physicalEducation;

    studentsMarks[i].totalMarks = totalMarks;
  }
}

calculateTotal(studentsMarks);
console.log('a. Added totalMarks field to each student object:', studentsMarks);
console.log('---- ---- ----');

console.log('b.');
function printTopper(studentsMarks) {
  for (let i = 0; i < studentsMarks.length; i++) {
    if (studentsMarks.totalMarks > 445) {
      console.log(studentsMarks[i].name);
    }
  }
  console.log('No one scored greater than 445');
}

printTopper(studentsMarks);
console.log('---- ---- ----');

console.log('Question 2');
console.log('---- ---- ----');
const appData = [
  { appName: 'App 1', rating: 4, downloads: 5000 },
  { appName: 'App 2', rating: 4, downloads: 8000 },
  { appName: 'App 3', rating: 5, downloads: 12000 },
  { appName: 'App 4', rating: 2, downloads: 3000 },
  { appName: 'App 5', rating: 5, downloads: 6000 },
];

function averageRating(appData) {
  let totalRating = 0;
  for (let i = 0; i < appData.length; i++) {
    totalRating = totalRating + appData[i].rating;
  }
  // console.log("Total Rating:", totalRating)
  return totalRating / appData.length;
}

console.log('a. Average Rating: ', averageRating(appData));
console.log('---- ---- ----');

console.log('b');
function calculateTotalDownloades(appData) {
  let totalDownloads = 0;
  for (let i = 0; i < appData.length; i++) {
    totalDownloads = totalDownloads + appData[i].downloads;
  }
  return totalDownloads;
}

console.log('Total downloads: ', calculateTotalDownloades(appData));
console.log('---- ---- ----');

console.log('Question 3');
console.log('---- ---- ----');
const studentsData = [
  {
    name: 'Rahul',
    rollNo: 201,
    chemistry: 88,
    maths: 78,
    commerce: 92,
    physicalEducation: 90,
    moralScience: 85,
    totalMarks: 433,
    avgMarks: 86.6,
  },
  {
    name: 'Priya',
    rollNo: 202,
    chemistry: 75,
    maths: 90,
    commerce: 85,
    physicalEducation: 94,
    moralScience: 88,
    totalMarks: 432,
    avgMarks: 86.4,
  },
  {
    name: 'Amit',
    rollNo: 203,
    chemistry: 82,
    maths: 95,
    commerce: 88,
    physicalEducation: 92,
    moralScience: 90,
    totalMarks: 447,
    avgMarks: 89.4,
  },
  {
    name: 'Neha',
    rollNo: 204,
    chemistry: 95,
    maths: 96,
    commerce: 94,
    physicalEducation: 99,
    moralScience: 99,
    totalMarks: 483,
    avgMarks: 96.6,
  },
  {
    name: 'Anita',
    rollNo: 205,
    chemistry: 85,
    maths: 92,
    commerce: 89,
    physicalEducation: 91,
    moralScience: 86,
    totalMarks: 443,
    avgMarks: 88.6,
  },
];

function calculateAverage(studentsData, subjectName) {
  let total = 0;
  for (let i = 0; i < studentsData.length; i++) {
    total = total + studentsData[i][subjectName];
  }
  return total / studentsData.length;
}

let chemistryAverage = calculateAverage(studentsData, 'chemistry');
console.log('Total average of chemistry:', chemistryAverage);

let mathsAverage = calculateAverage(studentsData, 'maths');
console.log('Average of maths: ', mathsAverage);

let commerceAverage = calculateAverage(studentsData, 'commerce');
console.log('Average of commerce: ', commerceAverage);
console.log('---- ---- ----');
