console.log('A5.8_HW_2');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');

const recipe = {
  name: 'Pasta Carbonara',
  cuisine: 'Italian',
};

console.log('1.1');
console.log('Name:', recipe.name);
console.log('---- ---- ----');

console.log('1.2');
console.log('Cuisine:', recipe.cuisine);
console.log('---- ---- ----');

console.log('1.3');
recipe.name = 'Bell Pepper Pizza';
console.log('Recipe object:', recipe);
console.log('---- ---- ----');

console.log('1.4');
recipe.difficulty = 'Intermediate';
console.log('Difficulty:', recipe.difficulty);
console.log('---- ---- ----');

console.log('1.5');
console.log('All properties of the recipe object:');
for (property in recipe) {
  console.log(property + ': ' + recipe[property]);
}
console.log('---- ---- ----');

console.log('Exercise 2');
console.log('---- ---- ----');

const laptop = {
  model: 'XPS 15',
  isTouchScreen: true,
  screenSize: 15.6,
};

console.log('2.1');
laptop.brand = 'Dell';
console.log('Brand:', laptop.brand);
console.log('---- ---- ----');

console.log('2.2');
laptop.processor = 'Intel Core i7';
console.log('Processor:', laptop.processor);
console.log('---- ---- ----');

console.log('2.3');
laptop.screenSize = 15.4;
console.log('Updated screen size:', laptop.screenSize);
console.log('---- ---- ----');

console.log('2.4');
console.log('All properties of the laptop object:');
for (property in laptop) {
  console.log(property + ': ' + laptop[property]);
}
