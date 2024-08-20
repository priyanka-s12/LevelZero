console.log('Question 8');
const coursesData = [
  {
    courseName: 'Course X',
    instructor: 'Instructor A',
    enrollments: 9500,
    contentHours: 40,
  },
  {
    courseName: 'Course Y',
    instructor: 'Instructor B',
    enrollments: 12000,
    contentHours: 60,
  },
  {
    courseName: 'Course Z',
    instructor: 'Instructor C',
    enrollments: 5000,
    contentHours: 30,
  },
  {
    courseName: 'Course W',
    instructor: 'Instructor D',
    enrollments: 8500,
    contentHours: 45,
  },
  {
    courseName: 'Course V',
    instructor: 'Instructor E',
    enrollments: 7000,
    contentHours: 50,
  },
];

function getMoreEnrollmentsCourses(data, enrollments) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].enrollments > enrollments) {
      result.push(data[i]);
    }
  }
  return result;
}

function getTotalContentHours(data, enrollments) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].enrollments > enrollments) {
      total = total + data[i].contentHours;
    }
  }
  return total;
}

function generateReport(data) {
  let moreEnrollments = getMoreEnrollmentsCourses(data, 8000);
  let totalHours = getTotalContentHours(data, 6000);

  let report = '---- Courses Report ----\n';
  report += 'Courses that have more than 8000 enrollments: ';
  for (let i = 0; i < moreEnrollments.length; i++) {
    report += '\nName: ' + moreEnrollments[i].courseName;
    report += '\nInstructor: ' + moreEnrollments[i].instructor;
    report += '\nNumber of enrollements: ' + moreEnrollments[i].enrollments;
    report += '\n';
  }

  report +=
    '\nTotal content hours for courses that have more than 6000 enrollments: ' +
    totalHours;

  return report;
}

console.log(generateReport(coursesData));
