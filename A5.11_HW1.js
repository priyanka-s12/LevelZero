console.log('A5.11_HW_1');
console.log('---- ---- ----');
const studentData = [
  {
    studentName: 'John',
    rollNo: 201,
    science: 88,
    history: 75,
    geography: 90,
  },
  {
    studentName: 'Alice',
    rollNo: 202,
    science: 92,
    history: 85,
    geography: 88,
  },
  {
    studentName: 'Bob',
    rollNo: 203,
    science: 78,
    history: 89,
    geography: 91,
  },
];

console.log('1.1');
function printReportCardByRollNo(rollNo) {
  let student = getReportByRollNo(rollNo);
  console.log(
    '==== Report Card for ' +
      student.studentName +
      ' ====' +
      '\nRoll No. : ' +
      student.rollNo +
      '\n------' +
      '\nMarks: ' +
      '\n------' +
      '\nScience: ' +
      student.science +
      '\nHistory: ' +
      student.history +
      '\nGeography: ' +
      student.geography +
      '\n------ ------ ------\n'
  );
}

function getReportByRollNo(rollNo) {
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].rollNo === rollNo) {
      return studentData[i];
    }
  }
}

printReportCardByRollNo(201);
printReportCardByRollNo(202);
printReportCardByRollNo(203);
console.log('---- ---- ----');

console.log('1.2');
function getStudentsDataByCutOff(subjectName, cutOff) {
  let result = [];
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i][subjectName] >= cutOff) {
      result.push(studentData[i]);
    }
  }
  return result;
}

console.log(
  'Student data that passes cut off for Science >= 80: ',
  getStudentsDataByCutOff('science', 80)
);
console.log(
  'Student data that passes cut off for History >= 90: ',
  getStudentsDataByCutOff('history', 90)
);
console.log(
  'Student data that passes cut off for Geography >= 90: ',
  getStudentsDataByCutOff('geography', 90)
);

console.log('---- ---- ----');

console.log('1.3');
for (let i = 0; i < studentData.length; i++) {
  let noOfSubjects = 3;
  let totalMarks =
    studentData[i].science + studentData[i].history + studentData[i].geography;

  studentData[i].totalMarks = totalMarks;

  studentData[i].average = studentData[i].totalMarks / noOfSubjects;
}

// console.log(studentData)

function getStudentsAboveCutOff(avgCutOff) {
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].average > avgCutOff) {
      console.log(
        studentData[i].studentName +
          ' has average marks ' +
          studentData[i].average
      );
    }
  }
}

getStudentsAboveCutOff(82);
console.log('---- ---- ----');

console.log('1.4');
function getStudentHighestAverageMarks(students) {
  let highestAvgMarks = students[0].average;
  for (let i = 1; i < students.length; i++) {
    if (students[i].average > highestAvgMarks) {
      highestAvgMarks = students[i].average;
      return students[i];
    }
  }
}

console.log(
  'Student that has highest average marks: ',
  getStudentHighestAverageMarks(studentData)
);
