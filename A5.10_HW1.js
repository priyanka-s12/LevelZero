console.log('A5.10_HW1');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');

console.log('1.1');
const cricketerScores = [
  {
    name: 'Virat',
    edenGardens: 72,
    wankhedeStadium: 88,
    ferozShahKotla: 45,
    chepauk: 74,
  },
  {
    name: 'Rohit',
    edenGardens: 64,
    wankhedeStadium: 41,
    ferozShahKotla: 68,
    chepauk: 34,
  },
  {
    name: 'Shikhar',
    edenGardens: 54,
    wankhedeStadium: 38,
    ferozShahKotla: 72,
    chepauk: 44,
  },
  {
    name: 'Rishabh',
    edenGardens: 22,
    wankhedeStadium: 27,
    ferozShahKotla: 34,
    chepauk: 51,
  },
];

for (let i = 0; i < cricketerScores.length; i++) {
  console.log(
    'Cricketer: ' +
      cricketerScores[i].name +
      '\n' +
      'Eden Gardens: ' +
      cricketerScores[i].edenGardens +
      '\n' +
      'Wankhede Stadium: ' +
      cricketerScores[i].wankhedeStadium +
      '\n' +
      'Feroz Shah Kotla: ' +
      cricketerScores[i].ferozShahKotla +
      '\n' +
      'Chepauk: ' +
      cricketerScores[i].chepauk +
      '\n'
  );
}

console.log('---- ---- ----');

console.log('1.2');
const chinnaswamyStadiumScores = [54, 82, 49, 45];
for (let i = 0; i < cricketerScores.length; i++) {
  cricketerScores[i].chinnaswamyStadium = chinnaswamyStadiumScores[i];
  console.log(cricketerScores[i]);
}
console.log('---- ---- ----');

console.log('Exercise 2');
console.log('---- ---- ----');

console.log('2.1');
const KLRahulData = {
  name: 'KL Rahul',
  edenGardens: 34,
  wankhedeStadium: 56,
  ferozShahKotla: 42,
  chepauk: 31,
  chinnaswamyStadium: 68,
};

console.log("KL Rahul's data: ", KLRahulData);

console.log('---- ---- ----');

console.log('2.2');
cricketerScores.push(KLRahulData);
console.log("Updated cricketer's data: ", cricketerScores);
console.log('---- ---- ----');

console.log('2.3');
for (let i = 0; i < cricketerScores.length; i++) {
  const totalScore =
    cricketerScores[i].edenGardens +
    cricketerScores[i].wankhedeStadium +
    cricketerScores[i].ferozShahKotla +
    cricketerScores[i].chepauk +
    cricketerScores[i].chinnaswamyStadium;

  cricketerScores[i].totalScore = totalScore;
}
console.log('Array with totalScore: ', cricketerScores);

console.log('---- ---- ----');

console.log('2.4');
for (let i = 0; i < cricketerScores.length; i++) {
  const noOfStadiums = 5;
  const avgScore = cricketerScores[i].totalScore / noOfStadiums;

  cricketerScores[i].averageScore = avgScore;
}
console.log('Array with average: ', cricketerScores);
console.log('---- ---- ----');

console.log('Exercise 3');
console.log('---- ---- ----');
for (let i = 0; i < cricketerScores.length; i++) {
  generateScoresReport(cricketerScores[i]);
}

function generateScoresReport(cricketer) {
  console.log(
    '===== Score Card for ' +
      cricketer.name +
      ' =====' +
      '\n' +
      'Eden Gardens: ' +
      cricketer.edenGardens +
      '\n' +
      'Wankhede Stadium: ' +
      cricketer.wankhedeStadium +
      '\n' +
      'Feroz Shah Kotla: ' +
      cricketer.ferozShahKotla +
      '\n' +
      'Chepauk: ' +
      cricketer.chepauk +
      '\n-----\n' +
      'Total: ' +
      cricketer.totalScore +
      '\n' +
      'Average: ' +
      cricketer.averageScore +
      '\n' +
      'Performance: ' +
      getPerformance(cricketer.averageScore) +
      '\n----- ----- ----- -----'
  );
}

function getPerformance(avg) {
  if (avg >= 80) {
    return 'Good';
  } else if (avg >= 60 && avg <= 79) {
    return 'Above Average';
  } else if (avg >= 45 && avg <= 59) {
    return 'Average';
  } else {
    return 'Bad';
  }
}
