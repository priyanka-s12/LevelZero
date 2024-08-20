console.log('A3_Exercise_1');
console.log('---- ---- ----');

//sales performance report

let rahulSalesTarget = 100;
let priyaSalesTarget = 200;
let amitSalesTarget = 150;

let rahulActualSales = 85;
let priyaActualSales = 180;
let amitActualSales = 120;

//calculate sales percentage
let rahulSalesPercentage = (rahulActualSales / rahulSalesTarget) * 100;
let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget) * 100;
let amitSalesPercentage = (amitActualSales / amitSalesTarget) * 100;

let rahulPerformance = '';
let rahulBonus = 0;
if (rahulSalesPercentage >= 90) {
  rahulPerformance = 'High Performer';
  rahulBonus = 0.2;
} else if (rahulSalesPercentage >= 70) {
  rahulPerformance = 'Average Performer';
  rahulBonus = 0.1;
} else {
  rahulPerformance = 'Low Performer';
  rahulBonus = 0;
}

let priyaPerformance = '';
let priyaBonus = 0;
if (priyaSalesPercentage >= 90) {
  priyaPerformance = 'High Performer';
  priyaBonus = 0.2;
} else if (priyaSalesPercentage >= 70) {
  priyaPerformance = 'Average Performer';
  priyaBonus = 0.1;
} else {
  priyaPerformance = 'Low Performer';
  priyaBonus = 0;
}

let amitPerformance = '';
let amitBonus = 0;
if (amitSalesPercentage >= 90) {
  amitPerformance = 'High Performer';
  amitBonus = 0.2;
} else if (amitSalesPercentage >= 70) {
  amitPerformance = 'Average Performer';
  amitBonus = 0.1;
} else {
  amitPerformance = 'Low Performer';
  amitBonus = 0;
}

//calculate bonus amount
let rahulBonusAmount = rahulActualSales * rahulBonus;
let priyaBonusAmount = priyaActualSales * priyaBonus;
let amitBonusAmount = amitActualSales * amitBonus;

//sales report
console.log('Sales Performance Report');
console.log('------------------------');
let salesReport =
  'Rahul' +
  '\nSales Target: ' +
  rahulSalesTarget +
  ' units' +
  '\nUnits sold: ' +
  rahulActualSales +
  '\nSales Percentage: ' +
  rahulSalesPercentage +
  '%' +
  '\nPerformace category: ' +
  rahulPerformance +
  '\nBonus Amount: ' +
  rahulBonusAmount +
  '\n\n' +
  'Priya' +
  '\nSales Target: ' +
  priyaSalesTarget +
  ' units' +
  '\nUnits sold: ' +
  priyaActualSales +
  '\nSales Percentage: ' +
  priyaSalesPercentage +
  '%' +
  '\nPerformace category: ' +
  priyaPerformance +
  '\nBonus Amount: ' +
  priyaBonusAmount +
  '\n\n' +
  'Amit' +
  '\nSales Target: ' +
  amitSalesTarget +
  ' units' +
  '\nUnits sold: ' +
  amitActualSales +
  '\nSales Percentage: ' +
  amitSalesPercentage +
  '%' +
  '\nPerformace category: ' +
  amitPerformance +
  '\nBonus Amount: ' +
  amitBonusAmount;

console.log(salesReport);
