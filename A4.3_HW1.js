console.log('A4.3_HW_1');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');
let day1Burnt = 400;
let day1Intake = 1500;

let day2Burnt = 450;
let day2Intake = 1800;

let day3Burnt = 300;
let day3Intake = 1600;

let day4Burnt = 500;
let day4Intake = 2000;

let baseCalorieBurn = 1500;

function calculateSurplusDeficit(day, dayBurnt, dayIntake, baseCalorieBurn) {
  let daySurplus = dayBurnt - (dayIntake + baseCalorieBurn);

  let daySurplusDeficit = '';
  if (daySurplus > 0) {
    daySurplusDeficit = 'Surplus';
  } else {
    daySurplusDeficit = 'Deficit';
  }
  console.log(day + ': ' + daySurplusDeficit + ': ' + daySurplus);
}

let day1SurplusDeficit = calculateSurplusDeficit(
  'Day 1',
  day1Burnt,
  day1Intake,
  baseCalorieBurn
);

let day2SurplusDeficit = calculateSurplusDeficit(
  'Day 2',
  day2Burnt,
  day2Intake,
  baseCalorieBurn
);

let day3SurplusDeficit = calculateSurplusDeficit(
  'Day 3',
  day3Burnt,
  day3Intake,
  baseCalorieBurn
);

let day4SurplusDeficit = calculateSurplusDeficit(
  'Day 4',
  day4Burnt,
  day4Intake,
  baseCalorieBurn
);

console.log('---- ---- ----');

console.log('Exercise 2');
console.log('---- ---- ----');

function calculateTotalBurnt() {
  return day1Burnt + day2Burnt + day3Burnt + day4Burnt;
}

let totalBurnt = calculateTotalBurnt();

console.log('Total Calories Burnt:', totalBurnt);

console.log('---- ---- ----');

console.log('Exercise 3');
console.log('---- ---- ----');

function calculateTotalIntake() {
  return day1Intake + day2Intake + day3Intake + day4Intake;
}

let totalIntake = calculateTotalIntake();

console.log('Total Calories Intake:', totalIntake);

console.log('---- ---- ----');

console.log('Exercise 4');
console.log('---- ---- ----');

function calculateTotalSurplus() {
  return totalBurnt - (totalIntake + 4 * baseCalorieBurn);
}

let totalSurplus = calculateTotalSurplus();

console.log('Total Surplus/Deficit:', totalSurplus);

console.log('---- ---- ----');

console.log('Exercise 5');
console.log('---- ---- ----');

function generateWeeklySummary(totalBurnt, totalIntake, totalSurplus) {
  let standingGoalAwards = '';
  if (totalBurnt >= 1000) {
    standingGoalAwards =
      'Congratulations! You have kept moving throughout. Keep it up!';
  } else {
    standingGoalAwards = 'No Award yet';
  }

  let weeklySummary =
    'Weekly Summary:' +
    '\n' +
    'Total Calories Burnt: ' +
    totalBurnt +
    '\n' +
    'Total Calories Intake: ' +
    totalIntake +
    '\n' +
    'Total Surplus/Deficit: ' +
    totalSurplus +
    '\n\n' +
    'Standing Goal Award: ' +
    standingGoalAwards;

  return weeklySummary;
}

console.log(generateWeeklySummary(totalBurnt, totalIntake, totalSurplus));
