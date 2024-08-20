console.log('A5.12_HW_1');
console.log('---- ---- ----');

const studentsData = [
  {
    name: 'Sarah',
    rollNo: 201,
    chemistry: 88,
    homeScience: 78,
    commerce: 92,
    physicalEducation: 90,
    moralScience: 85,
    totalMarks: 433,
    avgMarks: 86.6,
  },
  {
    name: 'Michael',
    rollNo: 202,
    chemistry: 75,
    homeScience: 90,
    commerce: 85,
    physicalEducation: 94,
    moralScience: 88,
    totalMarks: 432,
    avgMarks: 86.4,
  },
  {
    name: 'Emily',
    rollNo: 203,
    chemistry: 82,
    homeScience: 95,
    commerce: 88,
    physicalEducation: 92,
    moralScience: 90,
    totalMarks: 447,
    avgMarks: 89.4,
  },
  {
    name: 'David',
    rollNo: 204,
    chemistry: 95,
    homeScience: 96,
    commerce: 94,
    physicalEducation: 99,
    moralScience: 99,
    totalMarks: 483,
    avgMarks: 96.6,
  },
  {
    name: 'Olivia',
    rollNo: 205,
    chemistry: 85,
    homeScience: 92,
    commerce: 89,
    physicalEducation: 91,
    moralScience: 86,
    totalMarks: 443,
    avgMarks: 88.6,
  },
];

function getTopper(data) {
  let topperStudent = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].totalMarks > topperStudent.totalMarks) {
      topperStudent = data[i];
    }
  }
  return topperStudent;
}

function getGrade(avg) {
  if (avg >= 95) return 'A+';
  if (avg >= 90) return 'A';
  if (avg >= 85) return 'B+';
  if (avg >= 80) return 'B';
  if (avg >= 75) return 'C+';
  if (avg >= 70) return 'C';
  if (avg >= 65) return 'D+';
  if (avg >= 60) return 'D';
  if (avg >= 55) return 'E';
  return 'F';
}

function getAPlusGradersCount(data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].avgMarks >= 95) {
      count = count + 1;
    }
  }
  return count;
}

function getTotalMarks(data) {
  let totalMarks = 0;
  for (let i = 0; i < data.length; i++) {
    totalMarks = totalMarks + data[i].totalMarks;
  }
  return totalMarks;
}

function calculateSubjectAverage(data, subjectName) {
  let totalMarks = 0;
  for (let i = 0; i < data.length; i++) {
    totalMarks = totalMarks + data[i][subjectName];
  }
  return totalMarks / data.length;
}

function generateClassReport(studentsData) {
  let topper = getTopper(studentsData);
  let grade = getGrade(topper.avgMarks);
  let aPlusGradeCount = getAPlusGradersCount(studentsData);
  let totalMarksScoredByClass = getTotalMarks(studentsData);

  let chemistryAverage = calculateSubjectAverage(studentsData, 'chemistry');
  let homeScienceAverage = calculateSubjectAverage(studentsData, 'homeScience');
  let commerceAverage = calculateSubjectAverage(studentsData, 'commerce');
  let physicalEducationAverage = calculateSubjectAverage(
    studentsData,
    'physicalEducation'
  );
  let moralScienceAverage = calculateSubjectAverage(
    studentsData,
    'moralScience'
  );

  let report = '===== Class Performance Report =====\n';
  report += 'Topper:\n------\n';
  report += 'Name: ' + topper.name + '\n';
  report += 'Roll No: ' + topper.rollNo + '\n';
  report += 'Total Marks: ' + topper.totalMarks + '\n';
  report += 'Grade: ' + grade + '\n\n';
  report += 'A+ Graders:\n------\n';
  report += 'Total no. of A+ graders: ' + aPlusGradeCount + '\n';

  for (let i = 0; i < studentsData.length; i++) {
    if (studentsData[i].avgMarks >= 95) {
      report += 'Name: ' + studentsData[i].name + '\n';
      report += 'Total Marks: ' + studentsData[i].totalMarks + '\n';
    }
  }

  report += '------\n';
  report += 'Class Average:\n------\n';
  report += 'Total Marks Scored by Class: ' + totalMarksScoredByClass + '\n';
  report +=
    'Total Average of Class: ' +
    totalMarksScoredByClass / studentsData.length +
    '\n';
  report += '------\n';
  report += 'Total Average of Chemistry: ' + chemistryAverage;
  report += '\nTotal Average of Home Science: ' + homeScienceAverage;
  report += '\nTotal Average of Commerce: ' + commerceAverage;
  report +=
    '\nTotal Average of Physical Education: ' + physicalEducationAverage;
  report += '\nTotal Average of Moral Science: ' + moralScienceAverage + '\n';

  return report;
}

console.log(generateClassReport(studentsData));
