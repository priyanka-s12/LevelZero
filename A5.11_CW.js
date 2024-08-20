console.log('A5.11_CW');
console.log('---- ---- ----');

const studentData = [
  {
    name: 'Anu',
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
  },
  {
    name: 'Priya',
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
  },
  {
    name: 'Ravi',
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
  },
];

console.log('1.1');
function printReportCard(rollNo) {
  let student = getReportByRollNo(rollNo);
  console.log(
    '==== Report Card for ' +
      student.name +
      ' ====' +
      '\n' +
      'Roll No. : ' +
      student.rollNo +
      '\n' +
      '-----' +
      '\n' +
      'Marks: ' +
      '\n' +
      '-----' +
      '\n' +
      'Hindi: ' +
      student.hindi +
      '\n' +
      'English: ' +
      student.english +
      '\n' +
      'Maths: ' +
      student.maths +
      '\n ----- ----- -----'
  );
}

//extract specified object data by passing rollNo
function getReportByRollNo(rollNo) {
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].rollNo === rollNo) {
      return studentData[i];
    }
  }
}

printReportCard(101);
printReportCard(102);
printReportCard(103);
console.log('---- ---- ----');

//return array of objects, so create empty array and push objects into it
console.log('1.2');
function getStudentsDataByCutOff(subjectName, cutOff) {
  let result = [];
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i][subjectName] > cutOff) {
      // return studentData[i]
      result.push(studentData[i]);
    }
  }
  return result;
}

console.log(
  'Students data with cutoff for Hindi > 80: ',
  getStudentsDataByCutOff('hindi', 80)
);

console.log(
  '\nStudents data with cutoff for English > 90: ',
  getStudentsDataByCutOff('english', 90)
);

console.log(
  '\nStudents data with cutoff for Maths > 90: ',
  getStudentsDataByCutOff('maths', 90)
);

console.log('---- ---- ----');

console.log('1.3');
for (let i = 0; i < studentData.length; i++) {
  let noOfSubjects = 3;
  let totalMarks =
    studentData[i].hindi + studentData[i].english + studentData[i].maths;

  studentData[i].totalMarks = totalMarks;

  studentData[i].average = studentData[i].totalMarks / noOfSubjects;
}
// console.log(studentData)

function printStudentsAboveAverage(avgCuffOff) {
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].average > avgCuffOff) {
      console.log(
        studentData[i].name + ' has average marks ' + studentData[i].average
      );
    }
  }
}

printStudentsAboveAverage(82);
console.log('---- ---- ----');

console.log('1.4');

function getHighestAverageMarks(student) {
  let highestAvgMarks = student[0].average;
  for (let i = 1; i < student.length; i++) {
    if (student[i].average > highestAvgMarks) {
      highestAvgMarks = student[i].average;
    }
  }
  return highestAvgMarks;
}

console.log(
  'Student with highest average marks: ',
  getHighestAverageMarks(studentData)
);
