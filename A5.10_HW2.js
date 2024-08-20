console.log('A5.10_HW_2');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');

console.log('1.1');

const foodTracker = [
  {
    day: 'Monday',
    breakfast: 300,
    lunch: 300,
    snacks: 150,
    dinner: 500,
  },
  {
    day: 'Tuesday',
    breakfast: 250,
    lunch: 450,
    snacks: 200,
    dinner: 550,
  },
  {
    day: 'Wednesday',
    breakfast: 350,
    lunch: 550,
    snacks: 100,
    dinner: 700,
  },
  {
    day: 'Thursday',
    breakfast: 400,
    lunch: 600,
    snacks: 180,
    dinner: 650,
  },
  {
    day: 'Friday',
    breakfast: 280,
    lunch: 480,
    snacks: 120,
    dinner: 580,
  },
  {
    day: 'Saturday',
    breakfast: 320,
    lunch: 520,
    snacks: 160,
    dinner: 620,
  },
];

for (let i = 0; i < foodTracker.length; i++) {
  console.log(
    'Day: ' +
      foodTracker[i].day +
      '\n' +
      'Breakfast: ' +
      foodTracker[i].breakfast +
      '\n' +
      'Lunch: ' +
      foodTracker[i].lunch +
      '\n' +
      'Snacks: ' +
      foodTracker[i].snacks +
      '\n' +
      'Dinner: ' +
      foodTracker[i].dinner +
      '\n'
  );
}

console.log('---- ---- ----');

//added midAfternoon field to each object and print objects
console.log('1.2');
for (let i = 0; i < foodTracker.length; i++) {
  const midAfternoonCalories = [100, 120, 105, 110, 100, 130];
  foodTracker[i].midAfternoon = midAfternoonCalories[i];
  console.log(foodTracker[i]);
}
console.log('---- ---- ----');

console.log('Exercise 2');
console.log('---- ---- ----');

console.log('2.1');
const sundayData = {
  day: 'Sunday',
  breakfast: 370,
  lunch: 430,
  snacks: 140,
  dinner: 530,
  midAfternoon: 150,
};

console.log("Sunday's calorie intake: ", sundayData);
console.log('---- ---- ----');

//added sundayData to foodTracker
console.log('2.2');
foodTracker.push(sundayData);
console.log('Updated foodtracker: ', foodTracker);
console.log('---- ---- ----');

//added totalCalories field to every object and print updated array
console.log('2.3');
for (let i = 0; i < foodTracker.length; i++) {
  const totalCalorie =
    foodTracker[i].breakfast +
    foodTracker[i].lunch +
    foodTracker[i].snacks +
    foodTracker[i].dinner +
    foodTracker[i].midAfternoon;

  foodTracker[i].totalCalorie = totalCalorie;
  // console.log(foodTracker[i])
}
console.log('Array with totalCalorie: ', foodTracker);
console.log('---- ---- ----');

console.log('2.4');
for (let i = 0; i < foodTracker.length; i++) {
  const noOfMeals = 5;
  const avgCalorie = foodTracker[i].totalCalorie / noOfMeals;

  foodTracker[i].avgCalorie = avgCalorie;
}
console.log('Array with avgCalorie: ', foodTracker);
console.log('---- ---- ----');

console.log('Exercise 3');
console.log('---- ---- ----');

for (let i = 0; i < foodTracker.length; i++) {
  generateCaloriesReport(foodTracker[i]);
}

function generateCaloriesReport(foodTracker) {
  console.log(
    '==== Calorie Card for ' +
      foodTracker.day +
      ' ====' +
      '\n' +
      'Breakfast: ' +
      foodTracker.breakfast +
      '\n' +
      'Lunch: ' +
      foodTracker.lunch +
      '\n' +
      'Snacks: ' +
      foodTracker.snacks +
      '\n' +
      'Dinner: ' +
      foodTracker.dinner +
      '\n' +
      'Mid Afternoon: ' +
      foodTracker.midAfternoon +
      '\n-----\n' +
      'Total: ' +
      foodTracker.totalCalorie +
      '\n' +
      'Average: ' +
      foodTracker.avgCalorie +
      '\n' +
      'Comment: ' +
      getComment(foodTracker.totalCalorie) +
      '\n----- ----- ----- -----\n'
  );
}

function getComment(totCalories) {
  if (totCalories <= 1550) {
    return 'Your calorie intake was within limits';
  } else {
    return 'Your calorie intake was higher than recommended';
  }
}
