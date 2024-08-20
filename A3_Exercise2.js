console.log('A3_Exercise_2');
console.log('------------------------');

//calorie tracker and report system
let day1Burnt = 400;
let day1Intake = 1500;
let day2Burnt = 450;
let day2Intake = 1800;
let day3Burnt = 300;
let day3Intake = 1600;
let day4Burnt = 500;
let day4Intake = 2000;
let day5Burnt = 350;
let day5Intake = 1700;
let baseCalorieBurn = 1500;

//calculate surplus/ deficit
let day1Surplus = day1Burnt - (day1Intake + baseCalorieBurn);
let day2Surplus = day2Burnt - (day2Intake + baseCalorieBurn);
let day3Surplus = day3Burnt - (day3Intake + baseCalorieBurn);
let day4Surplus = day4Burnt - (day4Intake + baseCalorieBurn);
let day5Surplus = day5Burnt - (day5Intake + baseCalorieBurn);

let dailyReports =
  'Daily Reports:' +
  '\nDay 1: Surplus/Deficit: ' +
  day1Surplus +
  ' (Deficit)' +
  '\nDay 2: Surplus/Deficit: ' +
  day2Surplus +
  ' (Deficit)' +
  '\nDay 3: Surplus/Deficit: ' +
  day3Surplus +
  ' (Deficit)' +
  '\nDay 4: Surplus/Deficit: ' +
  day4Surplus +
  ' (Deficit)' +
  '\nDay 5: Surplus/Deficit: ' +
  day5Surplus +
  ' (Deficit)';

let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt;

let totalIntake =
  day1Intake + day2Intake + day3Intake + day4Intake + day5Intake;

let totalSurplus = totalBurnt - (totalIntake + 5 * baseCalorieBurn);

let standingGoalAwards = '';
if (totalBurnt >= 1000) {
  standingGoalAwards =
    'Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!';
} else {
  standingGoalAwards = 'Standing Goal Award: No Award yet';
}

let weeklySummary =
  '\nWeekly Summary:' +
  '\nTotal Calories Burnt: ' +
  totalBurnt +
  '\nTotal Calories Intake: ' +
  totalIntake +
  '\nTotal Surplus/Deficit: ' +
  totalSurplus +
  ' (Deficit)' +
  '\n\nAward:\n' +
  standingGoalAwards;

console.log(dailyReports);
console.log(weeklySummary);
