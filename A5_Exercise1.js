console.log('A5_Exercise_1');
console.log('---- ---- ----');

console.log('1.1');
const salesPersonData = [
  {
    name: 'Rajesh',
    location: 'Mumbai',
    q1Sales: 120000,
    q2Sales: 145000,
    q3Sales: 130000,
    q4Sales: 155000,
  },
  {
    name: 'Sneha',
    location: 'Delhi',
    q1Sales: 90000,
    q2Sales: 110000,
    q3Sales: 95000,
    q4Sales: 120000,
  },
  {
    name: 'Arun',
    location: 'Chennai',
    q1Sales: 100000,
    q2Sales: 125000,
    q3Sales: 115000,
    q4Sales: 135000,
  },
  {
    name: 'Kavita',
    location: 'Kolkata',
    q1Sales: 85000,
    q2Sales: 95000,
    q3Sales: 88000,
    q4Sales: 105000,
  },
  {
    name: 'Sanjay',
    location: 'Mumbai',
    q1Sales: 110000,
    q2Sales: 135000,
    q3Sales: 120000,
    q4Sales: 140000,
  },
  {
    name: 'Divya',
    location: 'Chennai',
    q1Sales: 95000,
    q2Sales: 120000,
    q3Sales: 110000,
    q4Sales: 130000,
  },
];

console.log('Array of salesPersonData objects: ', salesPersonData);
console.log('---- ---- ----');

console.log('1.2');
for (let i = 0; i < salesPersonData.length; i++) {
  let noOfQuarters = 4;
  let totalSales =
    salesPersonData[i].q1Sales +
    salesPersonData[i].q2Sales +
    salesPersonData[i].q3Sales +
    salesPersonData[i].q4Sales;

  salesPersonData[i].totalSales = totalSales;

  salesPersonData[i].avgSales = salesPersonData[i].totalSales / noOfQuarters;
}

console.log(
  'Added totalSales and avgSales fields in salesPersonData objects: ',
  salesPersonData
);
console.log('---- ---- ----');

console.log('1.3');

function getPerformanceGrade(avgSales) {
  if (avgSales >= 140000) return 'Top Performer';
  if (avgSales >= 120000 && avgSales < 140000) return 'Medium Performer';
  return 'Low Performer';
}

function generatePerformanceReport(salesPersonData) {
  let report = '===== Performance Report =====\n';
  for (let i = 0; i < salesPersonData.length; i++) {
    report += 'Name: ' + salesPersonData[i].name + '\n';
    report += 'Location: ' + salesPersonData[i].location + '\n';
    report += 'Total Sales: ' + salesPersonData[i].totalSales + '\n';
    report += 'Average Sales: ' + salesPersonData[i].avgSales + '\n';
    report +=
      'Performance Grade: ' +
      getPerformanceGrade(salesPersonData[i].avgSales) +
      '\n';
    report += '-----\n';
  }
  return report;
}

console.log(generatePerformanceReport(salesPersonData));
console.log('---- ---- ----');

console.log('1.4');
function getBestPerformer(data) {
  let bestPerformer = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].totalSales > bestPerformer.totalSales) {
      bestPerformer = data[i];
    }
  }
  return bestPerformer;
}

function getTopPerformers(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].avgSales >= 140000) {
      result.push(data[i]);
    }
  }
  return result;
}

function getAverageSalesOfQuarter(data, quarter) {
  let totalAvgSales = 0;
  for (let i = 0; i < data.length; i++) {
    totalAvgSales = totalAvgSales + data[i][quarter];
  }
  return totalAvgSales / data.length;
}

function getTotalSales(data) {
  let totalSales = 0;
  for (let i = 0; i < data.length; i++) {
    totalSales = totalSales + data[i].totalSales;
  }
  return totalSales;
}

function generateAnnualSalesReport(salesPersonData) {
  let bestPerformer = getBestPerformer(salesPersonData);
  let topPerformer = getTopPerformers(salesPersonData);
  let totalSales = getTotalSales(salesPersonData);

  let report = '===== Annual Sales Report =====\n\n';
  report += 'Best Performer\n';
  report += '------\n';
  report += 'Name: ' + bestPerformer.name + '\n';
  report += 'Location: ' + bestPerformer.location + '\n';
  report += 'Total Sales by Best Performer: ' + bestPerformer.totalSales + '\n';
  report += '\n------\n';
  report += 'Top Performers\n';
  report += '------\n';
  report += 'Total No. of Top Performers: ' + topPerformer.length + '\n';

  for (let i = 0; i < topPerformer.length; i++) {
    if (topPerformer.length !== 0) {
      report += '\nName: ' + topPerformer[i].name + '\n';
      report += 'Location: ' + topPerformer[i].location + '\n';
      report += 'Total Sales: ' + topPerformer[i].totalSales + '\n';
    }
  }
  report += '\n------\n';
  report += 'Sales Averages';
  report += '\n------\n';
  report +=
    'Q1 Average Sales: ' +
    getAverageSalesOfQuarter(salesPersonData, 'q1Sales') +
    '\n';
  report +=
    'Q2 Average Sales: ' +
    getAverageSalesOfQuarter(salesPersonData, 'q2Sales') +
    '\n';
  report +=
    'Q3 Average Sales: ' +
    getAverageSalesOfQuarter(salesPersonData, 'q3Sales') +
    '\n';
  report +=
    'Q4 Average Sales: ' +
    getAverageSalesOfQuarter(salesPersonData, 'q4Sales') +
    '\n';
  report += '------\n';
  report += 'Total Sales: ' + totalSales + '\n';
  report +=
    'Total Average Sales: ' + totalSales / salesPersonData.length + '\n';
  report += '------\n';

  return report;
}

console.log(generateAnnualSalesReport(salesPersonData));
